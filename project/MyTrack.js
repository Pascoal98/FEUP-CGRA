import { CGFobject } from "../lib/CGF";
import { MyTrackSegment } from "./MyTrackSegment.js";


/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 * @param points - Array of points  
*/

var listTracks = new Array();

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

    initBuffers() {

        for(let i = 0; i < this.points.length; i++){
            if(i+1 == this.points.length){
                let point1 = {x: this.points[i][0], z: this.points[i][1]};
                let point2 = {x: this.points[0][0], z: this.points[0][1]};
            } else {
                let point1 = {x: this.points[i][0], z: this.points[i][1]};
                let point2 = {x: this.points[i+1][0], z: this.points[i+1][1]};
            }
            this.track = new MyTrackSegment(this.scene, point1, point2);
            listTracks[i] = this.track;
        }
    }

    display() {
        for(let i = 0; i < this.points.length; i++){
            listTracks[i].display();
        }
    }
}