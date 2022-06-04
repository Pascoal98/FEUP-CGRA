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
            [15, 15, "station"],
            [15, 33, "simple"],
            [15.5, 33.5, "simple"],
            [16, 34, "simple"],
            [16.5, 34.5, "simple"],
            [17, 35, "simple"],
            [33, 35, "simple"],
            [33.5, 34.5, "simple"],
            [34, 34, "simple"],
            [34.5, 33.5, "simple"],
            [35, 33, "station"],
            [35, 15, "simple"],
            [34.5, 14.5, "simple"],
            [34, 14, "simple"],
            [33.5, 13.5, "simple"],
            [33, 13, "simple"],
            [17, 13, "simple"],
            [16.5, 13.5, "simple"],
            [16, 14, "simple"],
            [15.5, 14.5, "simple"]
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