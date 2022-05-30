import { CGFappearance, CGFobject} from '../lib/CGF.js';
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
        
        this.initMaterials(scene);

    }
    
    initMaterials(scene) {

        //create roof texture 
        this.roof = new CGFappearance(scene);
        this.roof.setAmbient(0.9, 0.9, 0.9, 1);
        this.roof.setDiffuse(1, 1, 1, 1);
        this.roof.setSpecular(1, 1, 1, 1);
        this.roof.setShininess(10.0);
        this.roof.loadTexture('images/roof.png');
        this.roof.setTextureWrap('REPEAT', 'REPEAT');

        this.houses = new CGFappearance(scene);
        this.houses.setAmbient(0.9, 0.9, 0.9, 1);
        this.houses.setDiffuse(1, 1, 1, 1);
        this.houses.setSpecular(1, 1, 1, 1);
        this.houses.setShininess(10.0);
        this.houses.loadTexture('images/houses.png');
        this.houses.setTextureWrap('REPEAT', 'REPEAT');

        this.porch = new CGFappearance(scene);
        this.porch.setAmbient(0.9, 0.9, 0.9, 1);
        this.porch.setDiffuse(1, 1, 1, 1);
        this.porch.setSpecular(1, 1, 1, 1);
        this.porch.setShininess(10.0);
        this.porch.loadTexture('images/porch.jpg');
        this.porch.setTextureWrap('REPEAT', 'REPEAT');

        this.column = new CGFappearance(scene);
        this.column.setAmbient(0.9, 0.9, 0.9, 1);
        this.column.setDiffuse(1, 1, 1, 1);
        this.column.setSpecular(1, 1, 1, 1);
        this.column.setShininess(10.0);
        this.column.loadTexture('images/column.jpg');
        this.column.setTextureWrap('REPEAT', 'REPEAT');

        this.stationfloor = new CGFappearance(scene);
        this.stationfloor.setAmbient(0.9, 0.9, 0.9, 1);
        this.stationfloor.setDiffuse(1, 1, 1, 1);
        this.stationfloor.setSpecular(1, 1, 1, 1);
        this.stationfloor.setShininess(10.0);
        this.stationfloor.loadTexture('images/stationfloor.jpg');
        this.stationfloor.setTextureWrap('REPEAT', 'REPEAT');

        this.minihouse = new CGFappearance(scene);
        this.minihouse.setAmbient(0.9, 0.9, 0.9, 1);
        this.minihouse.setDiffuse(1, 1, 1, 1);
        this.minihouse.setSpecular(1, 1, 1, 1);
        this.minihouse.setShininess(10.0);
        this.minihouse.loadTexture('images/minihouse.png');
        this.minihouse.setTextureWrap('REPEAT', 'REPEAT');


        this.main = new CGFappearance(scene);
        this.main.setAmbient(0.9, 0.9, 0.9, 1);
        this.main.setDiffuse(1, 1, 1, 1);
        this.main.setSpecular(1, 1, 1, 1);
        this.main.setShininess(10.0);
        this.main.loadTexture('images/main.png');
        this.main.setTextureWrap('REPEAT', 'REPEAT');
    }


    display() {


        this.scene.pushMatrix();
        this.stationfloor.apply();
        this.scene.translate(1,1.1,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(12, 20, 2.2);
        this.baseCube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.houses.apply();
        this.scene.translate(-1,5.2,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 8, 6.5);
        this.mainhouseCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.houses.apply();
        this.scene.translate(-1,4,6.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4.01, 5.01, 3.6);
        this.minihouseCube.display();
        this.scene.popMatrix();

        

        this.scene.pushMatrix();
        this.houses.apply();
        this.scene.translate(-1,4,-6.50);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 5, 3.6);
        this.minihouseCube.display();
        this.scene.popMatrix();

        

        this.scene.pushMatrix();
        this.roof.apply();
        this.scene.translate(-1,5.8,-6.50);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.8, 4.98, 2.8);
        this.roofCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.roof.apply();
        this.scene.translate(-1,5.8,6.5);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.8, 4.98, 2.8);
        this.roofCube.display();
        this.scene.popMatrix();



        this.scene.pushMatrix();
        this.roof.apply();
        this.scene.translate(-1,8.45,0);
        this.scene.rotate(Math.PI/4, 0, 0 , 1);
        this.scene.rotate(Math.PI/2, 1, 0 , 0);
        this.scene.scale(2.9, 7.98, 2.9);
        this.roofCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.porch.apply();
        this.scene.translate(3.1,6,0);
        this.scene.rotate(2.78*Math.PI/3,0,0,1);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(4.3, 8, 0.1);
        this.porchCube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.column.apply();
        this.scene.translate(5,2,-3.8);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.column.apply();
        this.scene.translate(5,2,-1.3);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.column.apply();
        this.scene.translate(5,2,1.3);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.column.apply();
        this.scene.translate(5,2,3.8);
        this.scene.scale(0.07, 3.5, 0.07);
        this.columnCylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1,4,6.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(4, 5, 3.6);
        this.minihouseCube.display();
        this.scene.popMatrix();

        
        this.scene.pushMatrix();
        this.minihouse.apply();
        this.scene.translate(1.01,4,6.5);
        this.scene.scale(0.01, 3.6, 5);
        this.minihouseCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.minihouse.apply();
        this.scene.translate(1,4,-6.5);
        this.scene.scale(0.01, 3.6, 5);
        this.minihouseCube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.main.apply();
        this.scene.translate(1,5.2,0);
        this.scene.scale(0.01, 6.4, 8);
        this.minihouseCube.display();
        this.scene.popMatrix();


    }

    enableNormalViz() {
        this.scene = scene;
        this.baseCube.enableNormalViz;
        this.mainhouseCube.enableNormalViz;
        this.minihouseCube.enableNormalViz;
        this.roofCube.enableNormalViz;
        this.porchCube.enableNormalViz;
        this.columnCylinder.enableNormalViz;
    }

    disableNormalViz() {this.scene = scene;
        this.baseCube.disableNormalViz;
        this.mainhouseCube.disableNormalViz;
        this.minihouseCube.disableNormalViz;
        this.roofCube.disableNormalViz;
        this.porchCube.disableNormalViz;
        this.columnCylinder.disableNormalViz;
    }

}   