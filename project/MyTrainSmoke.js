import { CGFobject, CGFappearance } from "../lib/CGF.js";
import { MySphere } from "./MySphere.js";

export class MyTrainSmoke extends CGFobject{
    constructor(scene){
        super(scene);

        this.random1 = Math.floor(Math.random() * (20 - 4 + 1)) + 4;
        this.random2 = Math.floor(Math.random() * (20 - 4 + 1)) + 4;

        this.cloud = new MySphere(scene, this.random1, this.random2);
        this.cloud2 = new MySphere(scene, this.random2, this.random1);
        this.cloud3 = new MySphere(scene, this.random1, this.random1);
        this.cloud4 = new MySphere(scene, this.random2, this.random2);


        this.initialPosition = {x: 0, y: 0, z: 0};
        this.scaleFactor = 0;
        this.randomNumber();
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

        if(this.scaleFactor > 0.7){
            this.randomNumber();
            this.resetCloud();
        } else {
            this.initialPosition.y += 0.01;
            this.initialPosition.z -= 0.01;
            this.scaleFactor += 0.002;
        }
    }

    randomNumber() {
        this.cloud1Number = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 100;
        this.cloud2Number = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 100;
        this.cloud3Number = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 100;
        this.cloud4Number = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 100;
    }

    display(){  

        this.scene.pushMatrix();
        this.cloudTexture.apply();
        this.scene.translate(this.initialPosition.x, this.initialPosition.y + 4.3, this.initialPosition.z + 2.1);
        this.scene.scale(this.cloud1Number + this.scaleFactor,this.cloud1Number + this.scaleFactor,this.cloud1Number + this.scaleFactor);
        this.cloud.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.cloudTexture.apply();
        this.scene.translate(this.initialPosition.x, this.initialPosition.y + 5, this.initialPosition.z + 2.1);
        this.scene.scale(this.cloud2Number + this.scaleFactor,this.cloud2Number + this.scaleFactor,this.cloud2Number + this.scaleFactor);
        this.cloud2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.cloudTexture.apply();
        this.scene.translate(this.initialPosition.x, this.initialPosition.y + 4.5, this.initialPosition.z + 2.1);
        this.scene.scale(this.cloud3Number + this.scaleFactor,this.cloud3Number + this.scaleFactor,this.cloud3Number + this.scaleFactor);
        this.cloud3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.cloudTexture.apply();
        this.scene.translate(this.initialPosition.x, this.initialPosition.y + 4.1, this.initialPosition.z + 2.2);
        this.scene.scale(this.cloud4Number + this.scaleFactor,this.cloud4Number + this.scaleFactor,this.cloud4Number + this.scaleFactor);
        this.cloud4.display();
        this.scene.popMatrix();

    }
}