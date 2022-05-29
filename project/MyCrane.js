import { CGFobject } from "../lib/CGF.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere } from "./MySphere.js";


/**
 * MyCrane
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyCrane extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;

        this.base = new MyCylinder(scene, 20);
        this.arm = new MyCylinder(scene, 20);
        this.cable = new MyCylinder(scene, 4);
        this.sphere = new MySphere(scene, 20, 20);

    }

    display() {

        //draw base
        this.scene.pushMatrix();
        this.scene.translate(0, 4.2, -0.5);
        this.scene.scale(0.2, 1.5, 0.2);
        this.base.display();
        this.scene.popMatrix();

        //draw sphere
        this.scene.pushMatrix();
        this.scene.translate(0, 5.65, -0.55);
        this.scene.scale(0.3, 0.3, 0.3);
        this.sphere.display();
        this.scene.popMatrix();

        //draw arm
        this.scene.pushMatrix();
        this.scene.translate(0, 5.6, -0.5);
        this.scene.rotate(-Math.PI / 4, 1, 0, 0);
        this.scene.scale(0.2, 3, 0.2);
        this.arm.display();
        this.scene.popMatrix();

        //draw cable
        this.scene.pushMatrix();
        this.scene.translate(0, 3.5, -2.5);
        this.scene.scale(0.1, 4, 0.1);
        this.cable.display();
        this.scene.popMatrix();
    }
}