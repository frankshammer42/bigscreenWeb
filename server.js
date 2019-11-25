const  express = require('express');
const path = require('path');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
//For intro Scene
let at_beginning = true;
//All the generated cutpoints from unity
let getCut = false; //Make sure we only cut once
let cut_points  = [];
let cut_bound = [];
let block_cut_points = []; //2D array
let segmentNumber; //how many segments we have

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('trust proxy', true);

let number_of_client_connections = 0;
let target_number = 10;

const web_clients_connection = io.of("/web-client");
web_clients_connection.on('connection', (socket) => {
    console.log("Get connection from web client");
    //if there is connection, we update unity client
    if (at_beginning){
        unity_client_connection.emit("intro_client_connect");
    }
    number_of_client_connections += 1;
    if (number_of_client_connections === target_number){
        console.log("Connection is enough");
        unity_client_connection.emit("intro_client_disconnect");
        at_beginning = false;
    }
    socket.on('disconnect', function(){
        number_of_client_connections -= 1;
        console.log('got disconnected');
        if (at_beginning){
            unity_client_connection.emit("intro_client_disconnect");
        }
    });

    socket.on('client_erase_block', function () {
        console.log("client erase a block");
        unity_client_connection.emit("intro_block_erased");
    });

    socket.on('client_light_on', function(){
        unity_client_connection.emit("num_of_light_on_connections", number_of_client_connections);
        unity_client_connection.emit("light_on");
    });

    //TODO: Maybe we need to have a start dim session if we want to make this continuous?
    socket.on('client_light_dim', function (data) {
        let socket_id = data[0];
        let dim_value = data[1];
        unity_client_connection.emit("light_dim", socket_id, dim_value);
    });

    socket.on('client_cut', function (data){
        console.log("Client Finished Cutting");
        let cut_index = data;
        console.log(cut_index);
        unity_client_connection.emit("cut", cut_index);
    });
});

const unity_client_connection = io.of("/unity-client");
unity_client_connection.on('connection', (socket) => {
    console.log("Get connection from unity client");
    socket.on('start_intro_interaction', function () {
        console.log("Start Intro Interaction");
        web_clients_connection.emit("intro_scene");
    });

    socket.on('start_light_on',  function(){
        console.log('Got light on message');
        web_clients_connection.emit("light_on_scene");
        //When server receives the events to turn light on
        //It reports back the number of connections it currently has to unity, so it can divide the lights
        socket.emit('num_of_light_on_connections', number_of_client_connections);
    });

    socket.on('start_light_dim', function(){
        console.log('Got light dim message');
        web_clients_connection.emit("light_dim_scene");
    });

    socket.on('start_cut', function (data) {
        console.log('Got cut message');
        let raw_cut_points = data.data;
        console.log(data.data);
        console.log(data.cutBound);
        console.log(data.xOffSet);
        console.log(data.yOffSet);
        console.log(data.segmentNumber);
        let segmentNumber = data.segmentNumber;
        let num_cuts = raw_cut_points.length/4 | 0;
        let num_cuts_per_segment = num_cuts/segmentNumber;
        cut_bound = data.cutBound;
        if (!getCut){
            // Initialize block cut points data for segment
            for (let i=0; i<segmentNumber; i++){
                block_cut_points.push([]);
            }
            // Initial block out points data for cut
            for (let i=0; i<segmentNumber; i++){
                for (let j=0; j<num_cuts_per_segment; j++){
                    let cut = [];
                    cut.push(raw_cut_points[i * num_cuts_per_segment * 4 + j*4]);
                    cut.push(raw_cut_points[i * num_cuts_per_segment * 4 + j*4 + 1]);
                    cut.push(raw_cut_points[i * num_cuts_per_segment * 4 + j*4 + 2]);
                    cut.push(raw_cut_points[i * num_cuts_per_segment * 4 + j*4 + 3]);
                    block_cut_points[i].push(cut);
                }
            }
            getCut = true;
        }

        for (let i=0; i<num_cuts; i++){
            let cut = [];
            cut.push(raw_cut_points[i*4]);
            cut.push(raw_cut_points[i*4+1]);
            cut.push(raw_cut_points[i*4+2]);
            cut.push(raw_cut_points[i*4+3]);
            cut_points.push(cut);
        }
        let connected_sockets_ids = Object.keys(web_clients_connection.connected);
        let num_connected_sockets = connected_sockets_ids.length;
        for (let i=0; i<num_connected_sockets; i++){
            // let cut = cut_points.pop();
            let segmentIndex = (i/num_cuts_per_segment) | 0;
            let cutIndex = i % num_cuts_per_segment;
            // if (segmentIndex < block_cut_points.length){
            let cut = block_cut_points[segmentIndex];
            let client_cut = cut[cutIndex];
            // let cut = cut_points[i];
            let socket_id = connected_sockets_ids[i];
            console.log("Send cut point", client_cut, "to", socket_id);
            // web_clients_connection.to(socket_id).emit("cut_scene", {"cut":cut, "index":i, "cut_bound":cut_bound});
            web_clients_connection.to(socket_id).emit("cut_scene", {"cut":client_cut, "index":i, "cut_bound":cut_bound, "segment_index": segmentIndex});
            // }
        }
        // web_clients_connection.emit("cut_scene");
    });
    
    socket.on('start_cut_fall', function (data) {
        console.log("cut pieces should fall");
        web_clients_connection.emit("cut_piece_fall");
    });
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/unity', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/unity_test.html'));
});

app.get('/reset', function (req, res) {
    at_beginning = true;
    cut_points  = [];
    cut_bound = [];
    block_cut_points = [];
    number_of_client_connections = 0;
    console.log("reset all the connection");
    res.send("Reset");
});

server.listen(process.env.PORT || 8000, function() {
    console.log('Server is running on', server.address().port);
});
