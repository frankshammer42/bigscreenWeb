const  express = require('express');
const path = require('path');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('trust proxy', true);

let number_of_client_connections = 0;

const web_clients_connection = io.of("/web-client");
web_clients_connection.on('connection', (socket) => {
    console.log("Get connection from web client");
    number_of_client_connections += 1;
    socket.on('disconnect', function(){
        number_of_client_connections -= 1;
        console.log('got disconnected');
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
});

const unity_client_connection = io.of("/unity-client");
unity_client_connection.on('connection', (socket) => {
    console.log("Get connection from unity client");
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
    })
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/unity', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/unity_test.html'));
});

server.listen(process.env.PORT || 3000, function() {
    console.log('Server is running on', server.address().port);
});
