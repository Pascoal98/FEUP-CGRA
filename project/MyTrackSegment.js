import {CGFappearance, CGFobject} from '../lib/CGF.js';


/**
 * MyTrackSegment
 * @constructor
 * @param scene - Reference to MyScene object
 * @param point1 - First point of the segment
 * @param point2 - Second point of the segment
 */

export class MyTrackSegment extends CGFobject {
    constructor(scene, point1, point2) {
        super(scene);
        this.point1X = point1.x;
        this.point1Z = point1.z;
        this.point2X = point2.x;
        this.point2Z = point2.z;

        this.angle = Math.atan2(this.point2Z - this.point1Z, this.point2X - this.point1X);

        this.applyTexture(scene);
    }

    applyTexture(scene) {

        //create rails texture for each track segment
        this.rails = new CGFappearance(scene);
        this.rails.setAmbient(0.1, 0.1, 0.1, 1);
        this.rails.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rails.setSpecular(0.1, 0.1, 0.1, 1);
        this.rails.setShininess(10.0);
        this.rails.loadTexture('images/tracks.png');
        this.rails.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        this.rails.apply();
    }
}