import { CGFobject } from "../lib/CGF.js";

const vehicle_state = {
    'STOPPED': 0,
    'ACCELERATING': 1,
    'CRUISING': 2,
    'DECELERATING': 3,
}

class State_Machine extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
 
        this.train = new MyTrainModel(scene);
        this.tracks = new MyTrack(scene);

        this.currentState = vehicle_state.STOPPED;

    }

    display() {

        this.train.display();
        this.tracks.display();
    }
}