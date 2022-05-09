import { CGFobject } from "../lib/CGF";

export class MyTrack extends CGFobject {
    constructor(scene, points) {
        super(scene);
        this.points = [
            [2, 3, "simple"],
            [4, 2, "station"],
            [6, 2, "simple"],
            [7, 3, "station"]
        ];
        this.initBuffers();
    }
}