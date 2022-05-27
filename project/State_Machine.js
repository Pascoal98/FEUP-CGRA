import { CGFobject } from "../lib/CGF.js";
import { MyTrainModel } from "./MyTrainModel.js";
import { MyTrack } from "./MyTrack.js";

const vehicle_state = {
    'STOPPED': 0,
    'ACCELERATING': 1,
    'CRUISING': 2,
    'DECELERATING': 3,
}

export class State_Machine extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
 
        this.train = new MyTrainModel(scene);
        this.tracks = new MyTrack(scene);

        this.currentState = vehicle_state.STOPPED;
        this.currentStation = 0;
        this.nextStation = 1;

        this.currentX = this.tracks.points[0][0];
        this.velocity = 0;

        this.calcAngle(this.tracks.points[0], this.tracks.points[1]);
        this.calcTwoPointsLine(this.tracks.points[0], this.tracks.points[1]);

    }

    calcAngle(point1, point2) {
        this.angle = -Math.atan2(point2[1] - point1[1], point2[0] - point1[0]) + Math.PI/2;
    }

    calcTwoPointsLine(point1, point2) {

        this.slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);

        this.intercept = point1[1] - this.slope * point1[0];

        this.currentZ = this.slope * this.currentX + this.intercept;
    }

    calcDistanceTwoPoints(point1, point2) {
        this.distance = Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
    }

    changeStation() {
        this.currentStation = this.nextStation;
        
        if(this.nextStation + 1 >= this.tracks.points.length) {
            this.nextStation = 0;
        } else {
            this.nextStation++;
        }
    }

    update(t) {
        
        switch (this.currentState) {
            case vehicle_state.STOPPED:
                //TO DO check if station has wood && train is empty
                console.log(this.currentState);
                if(this.currentX == this.tracks.points[this.currentStation][0]) {
                    this.currentState = vehicle_state.ACCELERATING;
                }
                console.log(this.currentX + " " + this.tracks.points[this.currentStation][0]);
                break;

            case vehicle_state.ACCELERATING:
                if(this.currentX < this.tracks.points[this.nextStation][0] && this.velocity < 0.1) {
                    this.velocity += 0.01;
                    this.currentX += this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                } else 
                if(this.currentX > this.tracks.points[this.nextStation][0] && this.velocity < 0.1) {
                    this.velocity += 0.01;
                    this.currentX -= this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                } else {
                    this.currentState = vehicle_state.CRUISING;
                }
                break;

            case vehicle_state.CRUISING:

                if(this.tracks.points[this.nextStation][0] > this.tracks.points[this.currentStation][0] && this.currentX < this.tracks.points[this.nextStation][0]) {
                    this.currentX += this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    
                } else

                if(this.tracks.points[this.nextStation][0] < this.tracks.points[this.currentStation][0] && this.currentX > this.tracks.points[this.nextStation][0]) {
                    this.currentX -= this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);

                } else 

                if(this.tracks.points[this.nextStation][0] > this.tracks.points[this.currentStation][0] && this.currentX >= this.tracks.points[this.nextStation][0]) {
                    this.changeStation();
                    this.currentX = this.tracks.points[this.currentStation][0];
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    this.calcAngle(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);

                } else 

                if(this.tracks.points[this.nextStation][0] < this.tracks.points[this.currentStation][0] && this.currentX <= this.tracks.points[this.nextStation][0]) {
                    
                    this.changeStation();
                    this.currentX = this.tracks.points[this.currentStation][0];
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    this.calcAngle(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                }
                    
                /*} else {
                    this.currentState = vehicle_state.DECELERATING;
                    console.log(this.currentState);
                }*/
                break;


            case vehicle_state.DECELERATING:
                break;
        }
    }

    display() {

        this.scene.pushMatrix();
        this.train.display();
        this.scene.popMatrix();

    }
}