// let socket = io.connect('http://localhost:3000');
let socket = io('/unity-client');
let current_client_connections_number = 0;

socket.on("num_of_light_on_connections", function (data) {
    current_client_connections_number = data["num_of_connections"];
    console.log("we have", current_client_connections_number, " connections");
});

socket.on("light_on", function (data) {
    console.log("Let's turn on some of the lights");
});

socket.on("light_dim", function (data) {
    console.log("Try to dim lights");
    console.log(data[0]);
    console.log(data[1]);
});


function on_light_on_scene_click(){
    console.log("Trigger Light On Scene Event");
    socket.emit("start_light_on");
}

function on_light_dim_scene_click(){
    console.log("Trigger Light Dim Scene Event");
    socket.emit("start_light_dim");
}

