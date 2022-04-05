import { CGFobject } from '../lib/CGF.js';
import { MyDiamond } from './MyDiamond.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyTriangle } from './MyTriangle.js';
import { CGFappearance } from "../lib/CGF.js";

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.scene = scene;
        this.blueTriangle = new MyTriangle(scene);
        this.orangeTriangle = new MyTriangle(scene);
        this.purpleTriangle = new MyTriangle(scene);
        this.redTriangle = new MyTriangle(scene);
        this.pinkTriangle = new MyTriangle(scene);
        this.greenDiamond = new MyDiamond(scene);
        this.yellowParallelogram = new MyParallelogram(scene);

        this.initMaterials(scene);
    }

    initMaterials(scene){
        
        
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0.0,0.0,0.0,1);
        this.green.setDiffuse(0,1*0.7,0,1.0);
        this.green.setSpecular(0,1,0,1.0);
        this.green.setShininess(10.0);

        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.0,0.0,0.0,1);
        this.yellow.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellow.setSpecular(1,1,0,1.0);
        this.yellow.setShininess(10.0);

        
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0.0,0.0,0.0,1);
        this.orange.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.orange.setSpecular(1,0.647,0,1.0);
        this.orange.setShininess(10.0);

    
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0.0,0.0,0.0,1);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);


        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0.0,0.0,0.0,1);
        this.pink.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.pink.setSpecular(1,0.714,0.757,1.0);
        this.pink.setShininess(10.0);


        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.0,0.0,0.0,1);
        this.purple.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.purple.setSpecular(0.58,0,0.827,1.0);
        this.purple.setShininess(10.0);

        
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.0,0.0,0.0,1);
        this.red.setDiffuse(1*0.7,0,0,1.0);
        this.red.setSpecular(1,0,0,1.0,1.0);
        this.red.setShininess(10.0);

        this.tangramMaterial = new CGFappearance(scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }


    
    display() {

        this.tangramMaterial.apply();

        //orange triangle
        this.scene.pushMatrix();
        this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
        this.scene.translate(0, 2, 0);
        this.orange.apply();
        this.orangeTriangle.display();
        this.scene.popMatrix();

        //blue triangle
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/4, 0, 0, 1);
        this.scene.translate(0,2,0);
        this.blue.apply(); 
        this.blueTriangle.display();
        this.scene.popMatrix();
        
        //green diamond
        this.scene.pushMatrix();
        this.scene.translate(-0.71,0,0);
        this.scene.scale(0.71,0.71,0.71);
        this.green.apply();
        this.greenDiamond.display();
        this.scene.popMatrix();

        //purple triangle
        this.scene.pushMatrix();
        this.scene.translate(-1.42,0,0);
        this.scene.scale(-0.5,0.5,0.5);
        this.scene.rotate(5*Math.PI/4, 0, 0, 1);
        this.purple.apply();
        this.purpleTriangle.display();
        this.scene.popMatrix();

        //red triangle

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) / 1.956, -0.71, 0);
        this.scene.scale(-0.51,0.5,0.5);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.red.apply();
        this.redTriangle.display();
        this.scene.popMatrix();

        /*yellow parallelogram

        this.scene.pushMatrix();
        this.scene.translate(1, -1.64, 0);
        this.scene.rotate(3*Math.PI/5 , 0, 0, 1);
        this.scene.scale(0.5, 1.35 , 1);
        this.yellow.apply();
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        */

        //pink triangle

        this.scene.pushMatrix();
        this.scene.translate(0.08,-1.5,0);
        this.scene.scale(0.75,0.75,0.75);
        this.scene.rotate(-Math.PI/2, 0, 0 , 1);
        this.pink.apply();
        this.pinkTriangle.display();
        this.scene.popMatrix();


    }

    enableNormalViz() {
        this.blueTriangle.enableNormalViz();
        this.orangeTriangle.enableNormalViz();
        this.purpleTriangle.enableNormalViz();
        this.redTriangle.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
        this.greenDiamond.enableNormalViz();
        this.yellowParallelogram.enableNormalViz();
    }

    disableNormalViz() {
        this.blueTriangle.disableNormalViz();
        this.orangeTriangle.disableNormalViz();
        this.purpleTriangle.disableNormalViz();
        this.redTriangle.disableNormalViz();
        this.pinkTriangle.disableNormalViz();
        this.greenDiamond.disableNormalViz();
        this.yellowParallelogram.disableNormalViz();
    }

}