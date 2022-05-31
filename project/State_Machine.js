import { CGFobject } from "../lib/CGF.js";
import { MyTrainModel } from "./MyTrainModel.js";
import { MyTrack } from "./MyTrack.js";
import { MyCrane } from "./MyCrane.js";

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
        this.crane = new MyCrane(scene);
        this.tracks = new MyTrack(scene);

        this.currentState = vehicle_state.STOPPED;
        this.currentStation = 0;
        this.nextStation = 1;

        this.currentX = this.tracks.points[0][0];
        this.currentZ = this.tracks.points[0][1];
        this.velocity = 0;

        this.calcAngle(this.tracks.points[0], this.tracks.points[1]);

    }

    calcAngle(point1, point2) {
        this.angle = -Math.atan2(point2[1] - point1[1], point2[0] - point1[0]) + Math.PI/2;
    }

    calcTwoPointsLine(point1, point2) {
        if(point1[0] == point2[0]) {
            this.currentZ = point1[1];
        } else {

            this.slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);

            this.intercept = point1[1] - this.slope * point1[0];

            this.currentZ = this.slope * this.currentX + this.intercept;
        }
    }

    calcDistanceTwoPoints(point1X, point1Z, point2X, point2Z) {
        return Math.sqrt(Math.pow(point2X - point1X, 2) + Math.pow(point2Z - point1Z, 2));
    }

    changeStation() {
        this.currentStation = this.nextStation;
        
        if(this.nextStation + 1 >= this.tracks.points.length) {
            this.nextStation = 0;
        } else {
            this.nextStation++;
        }

        this.currentX = this.tracks.points[this.currentStation][0];
        this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
        this.calcAngle(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);

    }

    update(t) {

        switch (this.currentState) {
            case vehicle_state.STOPPED:
                this.train.cloud.resetCloud();
                //TO DO check if station has wood && train is empty
                this.velocity = 0;
                break;

            case vehicle_state.ACCELERATING:
                this.train.cloud.updateCloud();
                this.train.running(0.01);
                if(this.velocity < 0.01) {
                    if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentZ < this.tracks.points[this.nextStation][1]) {
                        this.velocity += 0.001;
                        this.currentZ += this.velocity;
                    } else
                    if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentZ > this.tracks.points[this.nextStation][1]) {
                        this.velocity += 0.001;
                        this.currentZ -= this.velocity;
                    } else
                    if(this.currentX < this.tracks.points[this.nextStation][0]) {
                        this.velocity += 0.001;
                        this.currentX += this.velocity;
                        this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    } else
                    if(this.currentX > this.tracks.points[this.nextStation][0]) {
                        this.velocity += 0.001;
                        this.currentX -= this.velocity;
                        this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    }
                } else {
                    this.velocity = 0.01;
                    this.currentState = vehicle_state.CRUISING;
                }
                break;

            case vehicle_state.CRUISING:
                this.train.cloud.updateCloud();
                this.train.running(0.01);
                if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentX == this.tracks.points[this.nextStation][0] && this.currentZ < this.tracks.points[this.nextStation][1]) {
                    this.currentZ += this.velocity;
                    if(this.currentZ > this.tracks.points[this.nextStation][1]) {
                        this.changeStation();
                    }
                } else
                if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentX == this.tracks.points[this.nextStation][0] && this.currentZ > this.tracks.points[this.nextStation][1]) {
                    this.currentZ -= this.velocity;
                    if(this.currentZ < this.tracks.points[this.nextStation][1]) {
                        this.changeStation();
                    }
                } else
                if(this.currentX < this.tracks.points[this.nextStation][0]) {
                    this.currentX += this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    if(this.currentX > this.tracks.points[this.nextStation][0]) {
                        this.changeStation();
                    }
                } else
                if(this.currentX > this.tracks.points[this.nextStation][0]) {
                    this.currentX -= this.velocity;
                    this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    if(this.currentX < this.tracks.points[this.nextStation][0]) {
                        this.changeStation();
                    }
                }
                this.distance1 = this.calcDistanceTwoPoints(this.currentX, this.currentZ, this.tracks.points[this.nextStation][0], this.tracks.points[this.nextStation][1]);

                if((Math.pow(this.distance1,2) < Math.pow(0.3,2) ) && this.tracks.points[this.nextStation][2] == "station") {
                    this.currentState = vehicle_state.DECELERATING;
                    break;
                }
                break;

            case vehicle_state.DECELERATING:
                this.train.cloud.updateCloud();
                this.train.running(-0.01);
                if(this.velocity > 0) {
                    if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentZ < this.tracks.points[this.nextStation][1]) {
                        this.velocity -= 0.001;
                        this.currentZ += this.velocity;
                    } else
                    if(this.currentX == this.tracks.points[this.currentStation][0] && this.currentZ > this.tracks.points[this.nextStation][1]) {
                        this.velocity -= 0.001;
                        this.currentZ -= this.velocity;
                    } else
                    if(this.currentX < this.tracks.points[this.nextStation][0]) {
                        this.velocity -= 0.001;
                        this.currentX += this.velocity;
                        this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    } else
                    if(this.currentX > this.tracks.points[this.nextStation][0]) {
                        this.velocity -= 0.001;
                        this.currentX -= this.velocity;
                        this.calcTwoPointsLine(this.tracks.points[this.currentStation], this.tracks.points[this.nextStation]);
                    }
                } else {
                    this.distance1 = this.calcDistanceTwoPoints(this.currentX, this.currentZ, this.tracks.points[this.nextStation][0], this.tracks.points[this.nextStation][1]);
                    if(this.distance1 < 1) {
                        this.velocity = 0;
                        this.changeStation();
                        this.currentState = vehicle_state.STOPPED;
                    }
                }
                break;
        }
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.currentX, 0, this.currentZ);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.crane.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.currentX, 0, this.currentZ);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.train.display();
        this.scene.popMatrix();
    }
}