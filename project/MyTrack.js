import { CGFobject } from "../lib/CGF.js";
import { MyTrackSegment } from "./MyTrackSegment.js";


/**
 * MyTrack
 * @constructor
 * @param scene - Reference to MyScene object 
*/

var listTracks = new Array();

export class MyTrack extends CGFobject {
    constructor(scene) {
        super(scene);
        this.points = [
            [10, 10, "simple"],
            [20, 40, "station"],
            [45, 40, "simple"],
            [40, 25, "station"]
        ];

        this.initBuffers();
    }

    initBuffers() {

        for(let i = 0; i < this.points.length; i++){
            if(i+1 == this.points.length){
                var point1 = {x: this.points[i][0], z: this.points[i][1]};
                var point2 = {x: this.points[0][0], z: this.points[0][1]};
            } else {
                var point1 = {x: this.points[i][0], z: this.points[i][1]};
                var point2 = {x: this.points[i+1][0], z: this.points[i+1][1]};
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