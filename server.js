const  express = require('express');
const path = require('path');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server, {transport: ['websocket']});
//For intro Scene
let at_beginning = true;
//All the generated cutpoints from unity
let getCut = false; //Make sure we only cut once
let cut_points  = [];
let cut_bound = [];
let block_cut_points = []; //2D array
let segmentNumber; //how many segments we have
let num_cuts_per_segment;


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('trust proxy', true);

let number_of_client_connections = 0;
let target_number = 10;


let total_staircase_lights = 6;

//Progress Tracking
let progress = 0;
let cut_progress = 0;
let shadow_curtain_progress = 0;
let staircase_screen_index_progress = 0;
let staircase_lights_progress = 0;
let staircase_sockets_progress = 0;
let socket_sent_out_numbers = 0;
let connections_per_screen = 0;

// progress
// 0 - wait for connection
// 1 - start removing blocks
// 2 - train cut
// 3 - start screen
// 4 - start staircase
// 5 - shadow scene
// 100 - waiting transition page


const web_clients_connection = io.of("/web-client");
web_clients_connection.on('connection', (socket) => {
    console.log("Get connection from web client");

    switch (progress) {
        case 0:
            unity_client_connection.emit("intro_client_connect");
            break;
        case 1:
            console.log("add that socket into the intro scene");
            socket.emit("intro_scene"); //only add to that socket
            break;
        case 2:
            console.log("add that socket into the cut scene");
            let segmentIndex = (cut_progress/num_cuts_per_segment) | 0;
            let cutIndex = cut_progress % num_cuts_per_segment;
            if (segmentIndex < block_cut_points.length) {
                let cut = block_cut_points[segmentIndex];
                let client_cut = cut[cutIndex];
                socket.emit("cut_scene", {
                    "cut": client_cut,
                    "index": cut_progress,
                    "cut_bound": cut_bound,
                    "segment_index": segmentIndex
                });
                cut_progress += 1;
            }
            break;
        case 3:
            console.log("add that socket to screen scene");
            socket.emit("screen_city_scene");
            break;
        case 4:
            console.log("add that socket to staircase scene");
            socket.emit("staircase_scene", {"screen_index":staircase_screen_index_progress, "light_index": staircase_lights_progress});
            staircase_lights_progress += 1;
            break;
        case 5:
            console.log("add that socket to shadow scene");
            socket.emit("shadow_scene", {"index":shadow_curtain_progress});
            shadow_curtain_progress += 1;
            break;
        case 100:
            web_clients_connection.emit("waiting_page");
            break;
        default:
            break;
    }


    // if (at_beginning){
    // }
    // number_of_client_connections += 1;
    // if (number_of_client_connections === target_number){
    //     console.log("Connection is enough");
    //     unity_client_connection.emit("intro_client_disconnect");
    //     at_beginning = false;
    // }
    socket.on('disconnect', function(){
        console.log('got disconnected');
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
    
    socket.on('client_turnoff_screen', function (data) {
        console.log("Client turns off screen");
        unity_client_connection.emit("turnoff_screen");
    });

    socket.on('client_moveup_curtain', function (data) {
        console.log("client moves up curtain");
        let curtain_index = data.index;
        let curtain_target = data.progress;
        console.log(data);
        console.log(curtain_index);
        console.log(curtain_target);
        unity_client_connection.emit("curtain_move_up", curtain_index, curtain_target);
    });

    socket.on('client_turnon_light', function (data) {
        console.log("client turns on light");
        let screen_index = data.screen_index;
        let light_index = data.light_index;
        let light_target = data.progress;
        console.log(screen_index);
        console.log(light_index);
        console.log(light_target);
        unity_client_connection.emit("light_turn_on", screen_index, light_index, light_target);
    });
});

const unity_client_connection = io.of("/unity-client");
unity_client_connection.on('connection', (socket) => {
    console.log("Get connection from unity client");
    socket.on('start_intro_interaction', function () {
        console.log("Start Intro Interaction");
        progress = 1; //Change to cut interaction
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
        progress = 2;
        let raw_cut_points = data.data;
        console.log(data.data);
        console.log(data.cutBound);
        console.log(data.xOffSet);
        console.log(data.yOffSet);
        console.log(data.segmentNumber);
        let segmentNumber = data.segmentNumber;
        let num_cuts = raw_cut_points.length/4 | 0;
        num_cuts_per_segment = num_cuts/segmentNumber;
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
            let segmentIndex = (i/num_cuts_per_segment) | 0;
            let cutIndex = i % num_cuts_per_segment;
            if (segmentIndex < block_cut_points.length){
                let cut = block_cut_points[segmentIndex];
                let client_cut = cut[cutIndex];
                let socket_id = connected_sockets_ids[i];
                console.log("Send cut point", client_cut, "to", socket_id);
                web_clients_connection.to(socket_id).emit("cut_scene", {"cut":client_cut, "index":i, "cut_bound":cut_bound, "segment_index": segmentIndex});
                cut_progress += 1;
            }
        }
        // web_clients_connection.emit("cut_scene");
    });
    
    socket.on('start_cut_fall', function (data) {
        console.log("cut pieces should fall");
        web_clients_connection.emit("cut_piece_fall");
    });

    socket.on('start_screen', function (data) {
        console.log("Start screen city interaction");
        progress = 3;
        web_clients_connection.emit("screen_city_scene");
    });

    socket.on('start_shadow', function (data) {
        console.log("Start shadow scene");
        progress = 5;
        let connected_sockets_ids = Object.keys(web_clients_connection.connected);
        let num_connected_sockets = connected_sockets_ids.length;
        for (let i=0; i<num_connected_sockets; i++){
            let socket_id = connected_sockets_ids[i];
            console.log("socket id is", socket_id);
            web_clients_connection.to(socket_id).emit("shadow_scene", {"index":i});
            shadow_curtain_progress += 1;
        }
    });

    socket.on('start_staircase', function (data) {
        progress = 4;
        console.log("Start staircase scene for", data);
        let current_screen_index = data;
        current_screen_index = 2 - current_screen_index;
        let connected_sockets_ids = Object.keys(web_clients_connection.connected);
        let num_connected_sockets = connected_sockets_ids.length;
        // if (current_screen_index === 0){
        //     console.log("------");
        //     console.log(num_connected_sockets);
        //     connections_per_screen = num_connected_sockets/3;
        // }
        connections_per_screen = Math.floor(num_connected_sockets/3);
        let remain_connections = num_connected_sockets%3;
        // if (current_screen_index === 2){
        //     connections_per_screen += remain_connections;
        // }
        staircase_screen_index_progress = current_screen_index;
        // staircase_screen_index_progress  = current_screen_index;
        let start_index = current_screen_index*connections_per_screen;
        if (current_screen_index === 2){
            connections_per_screen += remain_connections;
        }

        console.log("Current start index is", start_index);
        for (let i=start_index; i<start_index+connections_per_screen; i++){
            if (i < connected_sockets_ids.length){
                socket_sent_out_numbers = i;
                let socket_id = connected_sockets_ids[i];
                let light_index = i - start_index;
                console.log("light index is", light_index);
                console.log("socket id is", socket_id);
                web_clients_connection.to(socket_id).emit("staircase_scene", {"screen_index":staircase_screen_index_progress, "light_index": light_index});
                staircase_lights_progress = light_index;
            }
        }
        staircase_lights_progress = 0;
        for (let i=start_index+connections_per_screen; i<num_connected_sockets; i++){
            if (i < connected_sockets_ids.length){
                let socket_id = connected_sockets_ids[i];
                web_clients_connection.to(socket_id).emit("staircase_scene_wait");
            }
        }
    })
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/unity', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/unity_test.html'));
});

//Controlling APIs
app.get('/reset', function (req, res) {
    at_beginning = true;
    cut_points  = [];
    cut_bound = [];
    block_cut_points = [];
    number_of_client_connections = 0;
    getCut = false;
    console.log("reset all the connection");
    res.send("Reset");
    progress = 0;
});

app.get('/start_erase', function (req, res) {
    unity_client_connection.emit("start_erase_blocks");
    console.log("start erase");
    res.send("start erase interaction");
});

app.get('/batch_erase_blocks', function (req, res) {
    web_clients_connection.emit("waiting_page");
    unity_client_connection.emit("start_batch_erase_blocks");
    console.log("start batch erase blocks");
    progress = 100; // Go back to the waiting page
    res.send("start batch erasing blocks");
});

app.get('/batch_draw_cut_lines', function (req, res) {
    unity_client_connection.emit("batch_draw_cut_lines");
    progress = 100; // Go back to the waiting page
    res.send("start batch draw cut lines");
});

app.get('/train_cut', function (req, res) {
    unity_client_connection.emit("train_cut");
    setTimeout(sendWaitingPage, 2500);
    // web_clients_connection.emit("waiting_page");
    console.log("train explodes");
    progress = 100; // Go back to the waiting page
    res.send("start train cut");
});

app.get('/batch_turnoff_screen', function (req, res) {
    unity_client_connection.emit("batch_turnoff_screen");
    // web_clients_connection.emit("waiting_page");
    progress = 100; // Go back to the waiting page
    res.send("start erase screens");
});

app.get('/batch_light_on_0', function (req, res) {
    unity_client_connection.emit("batch_light_on_0");
    progress = 100;
    res.send("start batch turn on lights for 0 staircase");
});

app.get('/batch_light_on_1', function (req, res) {
    unity_client_connection.emit("batch_light_on_1");
    res.send("start batch turn on lights for 1 staircase");
});

app.get('/batch_light_on_2', function (req, res) {
    unity_client_connection.emit("batch_light_on_2");
    res.send("start batch turn on lights for 2 staircase");
});

app.get('/batch_curtain', function (req, res) {
    unity_client_connection.emit("batch_curtain");
    progress = 100;
    res.send("start move up curtains");
});

server.listen(process.env.PORT || 8000, function() {
    console.log('Server is running on', server.address().port);
});

function sendWaitingPage(){
    web_clients_connection.emit("waiting_page");
}
