import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyPlane } from './MyPlane.js';


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

        this.scene = scene;
        this.point1X = point1.x;
        this.point1Z = point1.z;
        this.point2X = point2.x;
        this.point2Z = point2.z;

        console.log(this.point1X);
        
        this.angle = Math.atan2(this.point2Z - this.point1Z, this.point2X - this.point1X);

        console.log(this.angle);
        
        this.plane = new MyPlane(scene);
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

        this.scene.pushMatrix();
        this.scene.translate(this.point1X, 0, this.point1Z);
        this.scene.rotate(this.angle, 0, 1, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.plane.display();
        this.scene.popMatrix();

    }
}