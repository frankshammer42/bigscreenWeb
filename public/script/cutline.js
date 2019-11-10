class CutLine {
    constructor(x1, y1, x2, y2){
        this.start_threshold = 10;
        this.end_threshold = 10;
        this.draw_threshold = 15;
        this.start_x = x1;
        this.start_y = y1;
        this.end_x = x2;
        this.end_y = y2;
        this.k = 0;
        this.b = 0;
        this.extension = 25;
        this.calculateLine();
        //Extend the line so it's easier for users to cut
        if (this.start_x < this.end_x){
            this.draw_start_x = this.start_x - this.extension;
            this.draw_end_x = this.end_x + this.extension;
        }
        else{
            this.draw_start_x = this.start_x + this.extension;
            this.draw_end_x = this.end_x - this.extension;
        }
        this.draw_start_y = this.draw_start_x*this.k + this.b;
        this.draw_end_y = this.draw_end_x*this.k + this.b;
        this.intercept_x = 0;
        this.intercept_y = 0;
        this.draw_line_start = false; //When mouse pressed is close to the start or end we start render drawing line
        this.draw_line_end = false;
        this.user_draw_start_x = 0;
        this.user_draw_start_y = 0;
        this.user_draw_end_x = 0;
        this.user_draw_end_y = 0;
        this.finish_cut = false;
    }

    update(){

    }

    display(){
        strokeWeight(1);
        line(this.draw_start_x, this.draw_start_y, this.draw_end_x, this.draw_end_y);
    }

    calculateLine(){
        this.k = (this.end_y - this.start_y) / (this.end_x - this.start_x);
        this.b =  this.start_y - this.k * this.start_x;
    }

    getDistance(x, y){
        let new_line_k = -1 / this.k;
        let new_line_b = y - new_line_k*x;
        let intercept_x = (new_line_b - this.b) / (this.k - new_line_k);
        let intercept_y = this.k * intercept_x  + this.b;
        this.intercept_x = intercept_x;
        this.intercept_y = intercept_y;
        return dist(x, y, intercept_x, intercept_y);
    }

    updateStart(x, y){
        // noinspection DuplicatedCode
        if (!this.draw_line_start){
            if (dist(x, y, this.draw_start_x, this.draw_start_y) < this.start_threshold){
                this.draw_line_start = true;
                this.user_draw_start_x = this.draw_start_x;
                this.user_draw_start_y = this.draw_start_y;
                this.user_draw_end_x = this.draw_end_x;
                this.user_draw_end_y = this.draw_end_y;
            }
            // noinspection DuplicatedCode
            if (dist(x, y, this.draw_end_x, this.draw_end_y) < this.start_threshold){
                this.draw_line_start = true;
                this.user_draw_start_x = this.draw_end_x;
                this.user_draw_start_y = this.draw_end_y;
                this.user_draw_end_x = this.draw_start_x;
                this.user_draw_end_y = this.draw_start_y;
            }
        }
    }

    updateEnd(x, y){
        if (dist(x, y, this.user_draw_end_x, this.user_draw_end_y) < this.end_threshold){
            this.draw_line_end = true;
        }
    }


}