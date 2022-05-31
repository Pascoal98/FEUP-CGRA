import { CGFobject, CGFappearance } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyTrainSmoke extends CGFobject{
    constructor(scene){
        super(scene);

        this.cloud = new MySphere(scene, 20, 20);

        this.initialPosition = {x: 0, y: 0, z: 0};
        this.scaleFactor = 0;
        this.initMaterials(scene);
    }

    initMaterials(scene){

        //cloud texture
        this.cloudTexture = new CGFappearance(scene);
        this.cloudTexture.setAmbient(0.9, 0.9, 0.9, 1);
        this.cloudTexture.setDiffuse(1, 1, 1, 1);
        this.cloudTexture.setSpecular(1, 1, 1, 1);
        this.cloudTexture.setShininess(10.0);
        this.cloudTexture.loadTexture('images/cloud.png');
        this.cloudTexture.setTextureWrap('REPEAT', 'REPEAT');

    }

    resetCloud(){
        this.scaleFactor = 0;
        this.initialPosition.y = 0;
        this.initialPosition.z = 0;

    }

    updateCloud() {

        if(this.scaleFactor > 0.4){
            this.resetCloud();
        } else {
            this.initialPosition.y += 0.01;
            this.initialPosition.z -= 0.01;
            this.scaleFactor += 0.001;
        }
        console.log(this.scaleFactor + " " + this.initialPosition.y + " " + this.initialPosition.z);
    }

    display(){

        this.scene.pushMatrix();
        this.cloudTexture.apply();
        this.scene.translate(this.initialPosition.x, this.initialPosition.y + 4.3, this.initialPosition.z + 2.1);
        this.scene.scale(0.2 + this.scaleFactor,0.2 + this.scaleFactor,0.2 + this.scaleFactor);
        this.cloud.display();
        this.scene.popMatrix();

    }
}