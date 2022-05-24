import { CGFappearance, CGFobject } from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';
import { MyCube } from './MyCube.js';
import { MyCircle } from './MyCircle.js';
import { MySphere } from './MySphere.js'

/**
 * MyTrainModel
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyTrainModel extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
        this.wheels = new MyCylinder(scene, 20);
        this.cover = new MyCircle(scene, 20);
        this.chimneyCylinder = new MyCylinder(scene, 20);
        this.frontCylinder = new MyCylinder(scene, 20);
        this.baseCube = new MyCube(scene);
        this.cabinCube = new MyCube(scene);
        this.frontCover = new MySphere(scene,20,20);

    }

    display() {
        //draw wheels front left
        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, 2.25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, 2.25);
        this.scene.rotate((3 * Math.PI) / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, 2.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.75, 0.2, 0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels front right
        this.scene.pushMatrix();
        this.scene.translate(-1.45, 0.75, 2.25);
        this.scene.rotate((3 * Math.PI) / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.45, 0.75, 2.25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.75, 2.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.75, 0.2, 0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels back left
        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, -2.25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, -2.25);
        this.scene.rotate((3 * Math.PI) / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.45, 0.75, -2.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.75, 0.2, 0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //draw wheels back right
        this.scene.pushMatrix();
        this.scene.translate(-1.45, 0.75, -2.25);
        this.scene.rotate((3 * Math.PI) / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.45, 0.75, -2.25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(0.75, 0.75, 1);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, 0.75, -2.25);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.75, 0.2, 0.75);
        this.wheels.display();
        this.scene.popMatrix();

        //base Cube
        this.scene.pushMatrix();
        this.scene.translate(0, 1.5, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(2.5, 7.5, 1);
        this.baseCube.display();
        this.scene.popMatrix();

        //cabin Cube
        this.scene.pushMatrix();
        this.scene.translate(0, 3.2, -0.5);
        this.scene.scale(2, 2.5, 1.8);
        this.cabinCube.display();
        this.scene.popMatrix();

        //front cylinder
        this.scene.pushMatrix();
        this.scene.translate(0, 2.9, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.9, 3.5, 0.9);
        this.frontCylinder.display();
        this.scene.popMatrix();

        //chimney cylinder
        this.scene.pushMatrix();
        this.scene.translate(0 ,3.8, 2.1);
        this.scene.scale(0.2, 0.7, 0.2);
        this.chimneyCylinder.display();
        this.scene.popMatrix();

        //Frente 
        this.scene.pushMatrix();
        this.scene.translate(0,2.9,3.4);
        this.scene.scale(0.9,0.9,0.4);
        this.frontCover.display();
        this.scene.popMatrix();


    }

    enableNormalViz() {
        this.wheels.enableNormalViz();
        this.cover.enableNormalViz();
        this.chimneyCylinder.enableNormalViz();
        this.frontCylinder.enableNormalViz();
        this.baseCube.enableNormalViz();
        this.cabinCube.enableNormalViz();
        this.frontCover.enableNormalViz();
    }

    disableNormalViz() {
        this.wheels.disableNormalViz();
        this.cover.disableNormalViz();
        this.chimneyCylinder.disableNormalViz();
        this.frontCylinder.disableNormalViz();
        this.baseCube.disableNormalViz();
        this.cabinCube.disableNormalViz();
        this.frontCover.disableNormalViz();
    }

}