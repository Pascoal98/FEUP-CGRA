import { CGFobject } from "../lib/CGF";

export class MyTrack extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {

        this.tracks = [
            {x: 2, z: 3, type: "simple"},
            {x: 4, z: 2, type: "station"},
            {x: 6, z: 2, type: "simple"},
            {x: 7, z: 3, type: "station"}
        ];
    }
}