import { CGFappearance, CGFobject } from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';
import { MyCube } from './MyCube.js';
import { MyCircle } from './MyCircle.js';

/**
 * MyTrainModel
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyTrainModel extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
        this.wheels = new MyCylinder(scene,20);
        this.cover = new MyCircle(scene,20);
        this.chimneyCylinder = new MyCylinder(scene,20);
        this.frontCylinder = new MyCylinder(scene,20);
        this.baseCube = new MyCube(scene);
        this.cabinCube = new MyCube(scene);

    }



    display() {
        //draw wheels front left
        this.scene.pushMatrix();
        this.scene.translate(0,0.75,0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75,0.75,1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.75,0);
        this.scene.rotate(Math.PI / 2, 0, 0,1);
        this.scene.scale(0.75,0.2,0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels front right
        this.scene.pushMatrix();
        this.scene.translate(-2.9,0.75,0);
        this.scene.rotate((3* Math.PI)/2, 0, 1, 0);
        this.scene.scale(0.75,0.75,1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.7,0.75,0);
        this.scene.rotate(Math.PI / 2, 0, 0,1);
        this.scene.scale(0.75,0.2,0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels back left
        this.scene.pushMatrix();
        this.scene.translate(0,0.75,-4.5);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75,0.75,1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.75,-4.5);
        this.scene.rotate(Math.PI / 2, 0, 0,1);
        this.scene.scale(0.75,0.2,0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels back right
        this.scene.pushMatrix();
        this.scene.translate(-2.9,0.75,-4.5);
        this.scene.rotate((3* Math.PI)/2, 0, 1, 0);
        this.scene.scale(0.75,0.75,1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.7,0.75,-4.5);
        this.scene.rotate(Math.PI / 2, 0, 0,1);
        this.scene.scale(0.75,0.2,0.75);
        this.wheels.display();
        this.scene.popMatrix();
       

        //base Cube
        this.scene.pushMatrix();
        this.scene.translate(0,1.5,0);
        this.scene.rotate(Math.PI /2,1,0,0);
        this.scene.scale(2.5,7.5,1);
        this.baseCube.display();
        this.scene.popMatrix();

        //cabin Cube

        this.scene.pushMatrix();
        this.scene.translate(0,2.9,-2);
        this.scene.rotate(Math.PI /2,1,0,0);
        this.scene.scale(2,2.5,1.8);
        this.cabinCube.display();
        this.scene.popMatrix();

        /*blue triangle
        this.scene.pushMatrix();
        this.scene.scale(2, 2, 2);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.translate(1, 1, 0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        //green diamond
        this.scene.pushMatrix();
        this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
        this.scene.translate(-1, 0, 0);
        this.greenDiamond.display();
        this.scene.popMatrix();

        //purple triangle
        this.scene.pushMatrix();
        this.scene.translate(-2 * Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        //red triangle
        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(2), 0);
        this.scene.rotate(5 * Math.PI / 4, 0, 0, 1);
        this.redTriangle.display();
        this.scene.popMatrix();

        //yellow parallelogram
        this.scene.pushMatrix();
        this.scene.translate(2 * Math.sqrt(2), -2 * Math.sqrt(2), 0);
        this.scene.scale(-Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
        this.yellowParallelogram.display();
        this.scene.popMatrix();



        //pink triangle
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), -Math.sqrt(2), 0);
        this.scene.scale(Math.sqrt(2), Math.sqrt(2), Math.sqrt(2));
        this.pinkTriangle.display();
        this.scene.popMatrix();
        */

    }

    enableNormalViz() {
        this.wheelCylinder.enableNormalViz();
        this.chimneyCylinder.enableNormalViz();
        this.frontCylinder.enableNormalViz();
        this.baseCube.enableNormalViz();
        this.cabinCube.enableNormalViz();
    }

    disableNormalViz() {
        this.wheelCylinder.disableNormalViz();
        this.chimneyCylinder.disableNormalViz();
        this.frontCylinder.disableNormalViz();
        this.baseCube.disableNormalViz();
        this.cabinCube.disableNormalViz();
    }

}