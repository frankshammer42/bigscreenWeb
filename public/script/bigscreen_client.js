// let socket = io.connect('http://localhost:3000');
let socket = io('/web-client');

function on_light_on_button_click(){
    socket.emit("client_light_on");
}

window.onload = function() {
    socket.on('light_on_scene', function (data) {
        console.log("Light on scene interactions");
        let control_panel = document.getElementById("control_panel");
        control_panel.innerHTML = "";
        let light_on_button = document.createElement('button');
        light_on_button.innerHTML = "Light On";
        light_on_button.setAttribute("id", "light_on_button");
        light_on_button.onclick = on_light_on_button_click;
        control_panel.appendChild(light_on_button);
    });

    socket.on('light_dim_scene', function (data) {
        console.log("Light dim scene interactions");
        let control_panel = document.getElementById("control_panel");
        control_panel.innerHTML = "";
        let light_dim_range = document.createElement('INPUT');
        light_dim_range.setAttribute("type", "range");
        light_dim_range.setAttribute("id", "light_dim_range");
        light_dim_range.max = 100;
        light_dim_range.min = 5;
        light_dim_range.step = 0.5;
		light_dim_range.value = 5;
        light_dim_range.oninput = send_dim_value;
        control_panel.appendChild(light_dim_range);
    });
};

function send_dim_value(){
    let socket_id = socket.id;
    let val = document.getElementById("light_dim_range").value;
    socket.emit("client_light_dim", [socket_id, val]);
}
// socket.on('connect', function(data) {
//     socket.emit('join', 'Hello World from client');
//
//
// });
