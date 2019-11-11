// let socket = io.connect('http://localhost:3000');
let cut_point;
let cut_index;
let cut_line;
let scene_index;
let draw_threshold = 35; // Check to see if users line is near
let socket;
let cut_scale=80;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(184, 15, 133);
}

function on_light_on_button_click(){
    socket.emit("client_light_on");
}

function send_dim_value(){
    let socket_id = socket.id;
    let val = document.getElementById("light_dim_range").value;
    socket.emit("client_light_dim", [socket_id, val]);
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    sceneIndex = 0;
    background(184, 15, 133);
    socket = io('/web-client');
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

    socket.on('cut_scene', function (data) {
        console.log("cut scene interactions");
        scene_index = 1;
        cut_point = data.cut;
        cut_index = data.index;
        console.log(cut_point);
        cut_point[1] = -1*cut_point[1];
        cut_point[3] = -1*cut_point[3];
        for (let i=0; i<cut_point.length; i++){
            cut_point[i] = cut_scale*cut_point[i];
        }
        cut_point[0] = cut_point[0] + window.innerWidth/2;
        cut_point[1] = cut_point[1] + window.innerHeight/2;
        cut_point[2] = cut_point[2] + window.innerWidth/2;
        cut_point[3] = cut_point[3] + window.innerHeight/2;
        cut_line = new CutLine(cut_point[0], cut_point[1], cut_point[2], cut_point[3]);
        // let control_panel = document.getElementById("control_panel");
        // control_panel.innerHTML = "Cut scene";
    });
}

function draw(){
    background(184, 15, 133);
    if (scene_index === 1){
        // ellipse(50, 50, 80, 80);
        textSize(32);
        fill(255, 255, 255);
        text("Cut Scene", 40, 40);
        rectMode(CENTER); // Default rectMode is CORNER
        fill(255); // Set fill to white
        rect(window.innerWidth/2, window.innerHeight/2, 7.79*cut_scale, 2.08*cut_scale);
        cut_line.display();
        if (!cut_line.finish_cut){
            if (mouseIsPressed === true){
                let distance = cut_line.getDistance(mouseX, mouseY);
                line(mouseX, mouseY, cut_line.intercept_x, cut_line.intercept_y);
                text(distance, 40, 80);
                cut_line.updateStart(mouseX, mouseY);
                if (distance < draw_threshold){
                    if (cut_line.draw_line_start){
                        stroke(0, 255, 0);
                        line(cut_line.user_draw_start_x, cut_line.user_draw_start_y, cut_line.intercept_x, cut_line.intercept_y);
                        stroke(0, 0, 0);
                    }
                    cut_line.updateEnd(mouseX, mouseY);
                    if (cut_line.draw_line_end){
                        text("Cuuuut", 40, 120);
                        socket.emit("client_cut", cut_index);
                        cut_line.draw_line_start = false;
                        cut_line.draw_line_end = false;
                        cut_line.finish_cut = true;
                    }
                }
                else{
                    if (cut_line.draw_line_start){
                        cut_line.draw_line_start = false;
                        cut_line.draw_line_end = false;
                    }
                }
            }
        }
        else{
            text("Cutting Completed", 40, 80);
        }


    }
}



// socket.on('connect', function(data) {
//     socket.emit('join', 'Hello World from client');
//
//
// });
