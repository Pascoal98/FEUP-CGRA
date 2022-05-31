import { CGFobject } from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";

const wood_state = {
    'STATION' : 0,
    'ATTACHED' : 1,
    'TRAIN' : 2,
}

export class MyWood extends CGFobject {
    constructor(scene) {
        this.scene = scene;

        this.wood = new MyCylinder(scene, 4);

        this.currentState = wood_state.STATION;

        
    }
}