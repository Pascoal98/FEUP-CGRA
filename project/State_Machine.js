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

        this.calcAngle(this.tracks.points[0][0],this.tracks.points[0][1],this.tracks.points[1][0],this.tracks.points[1][1]);

    }

    calcAngle(point1X , point1Z, point2X, point2Z) {
        this.angle = Math.atan2(point2Z - point1Z, point2X - point1X);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.tracks.points[0][0], 0, this.tracks.points[0][1]);
        this.scene.rotate(-this.angle + Math.PI/2, 0, 1, 0);
        this.train.display();
        this.scene.popMatrix();

        this.tracks.display();

    }
}