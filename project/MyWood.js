import { CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';
import { MyCircle } from './MyCircle.js';

/**
 * MyWood
 * @constructor
 * @param scene - Reference to MyScene object
 */

/*
const wood_state = {
    'STATION' : 0,
    'ATTACHED' : 1,
    'TRAIN' : 2,
}
*/

export class MyWood extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene = scene;
        this.wood = new MyCylinder(scene, 20);
        this.cover = new MyCircle(scene, 20);

        //this.currentState = wood_state.STATION;

        this.initMaterials(scene);

    }
    initMaterials(scene) {

        // wood texture

        this.woodtext = new CGFappearance(scene);
        this.woodtext.setAmbient(0.9, 0.9, 0.9, 1);
        this.woodtext.setDiffuse(1, 1, 1, 1);
        this.woodtext.setSpecular(1, 1, 1, 1);
        this.woodtext.setShininess(10.0);
        this.woodtext.loadTexture('images/trunk.jpg');
        this.woodtext.setTextureWrap('REPEAT', 'REPEAT');

        //wood cover texture

        this.coverext = new CGFappearance(scene);
        this.coverext.setAmbient(0.9, 0.9, 0.9, 1);
        this.coverext.setDiffuse(1, 1, 1, 1);
        this.coverext.setSpecular(1, 1, 1, 1);
        this.coverext.setShininess(10.0);
        this.coverext.loadTexture('images/trunkcover.jpg');
        this.coverext.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {

        this.scene.pushMatrix();
        this.woodtext.apply();
        this.scene.translate(0.245, 0.04, 0.26);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.wood.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.woodtext.apply();
        this.scene.translate(0.25, 0.049, 0.26);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.wood.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.woodtext.apply();
        this.scene.translate(0.255, 0.04, 0.26);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.255, 0.04, 0.29);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.245, 0.04, 0.29);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.25, 0.049, 0.29);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.255, 0.04, 0.26);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.scene.rotate(Math.PI,1,0,0);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.245, 0.04, 0.26);
        this.scene.scale(0.005, 0.005 , 0.03);
        this.scene.rotate(Math.PI,1,0,0);
        this.cover.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.coverext.apply();
        this.scene.translate(0.25, 0.049, 0.26);
        this.scene.scale(0.005, 0.005 , 0.003);
        this.scene.rotate(Math.PI,1,0,0);
        this.cover.display();
        this.scene.popMatrix();

    }

}