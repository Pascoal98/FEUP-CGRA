import { CGFobject } from '../lib/CGF.js';
import { MyCube } from './MyCube.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyStationModel
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyStationModel extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
        this.baseCube = new MyCube(scene);
        this.mainhouseCube = new MyCube(scene);
        this.minihouseCube = new MyCube(scene);
        this.roofCube = new MyCube(scene);
        this.porchCube = new MyCube(scene);
        this.columnCylinder = new MyCylinder(scene, 20);

    }

    display() {
        //draw wheels front left
        this.scene.pushMatrix();
        this.scene.translate(1,1.1,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(12, 20, 2.2);
        this.baseCube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-1,5.2,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 8, 6.5);
        this.mainhouseCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,4,6.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 5, 3.6);
        this.minihouseCube.display();
        this.scene.popMatrix();

        

        this.scene.pushMatrix();
        this.scene.translate(-1,4,-6.50);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 5, 3.6);
        this.minihouseCube.display();
        this.scene.popMatrix();

        

        this.scene.pushMatrix();
        this.scene.translate(-1,5.8,-6.50);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.8, 5, 2.8);
        this.roofCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,5.8,6.5);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.8, 5, 2.8);
        this.roofCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,8.45,0);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.9, 8, 2.9);
        this.roofCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.1,6,0);
        this.scene.rotate(2.78*Math.PI/3,0,0,1);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(4.3, 8, 0.1);
        this.porchCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,2,-3.8);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,2,-1.3);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,2,1.3);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,2,3.8);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();



    }

    enableNormalViz() {
        this.baseCube.enableNormalViz();
    }

    disableNormalViz() {
        this.baseCube.disableNormalViz();
    }

}