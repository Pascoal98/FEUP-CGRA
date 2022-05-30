import { CGFscene,  CGFaxis, CGFappearance } from "../lib/CGF.js";
import { MyTrack } from "./MyTrack.js";
import { MyCircle } from "./MyCircle.js";
import { MySphere } from "./MySphere.js";
import { MyCylinder} from "./MyCylinder.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { CGFcamera2 } from "./CGFcamera2.js";
import { State_Machine } from "./State_Machine.js";
import { PlaceStations } from "./PlaceStations.js";


/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(1000/60);
        
        this.enableTextures(true);

        this.vertices = 20;
        this.stacks = 10;
        this.slices = 50;

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.track = new MyTrack(this);
        this.circle = new MyCircle(this, this.vertices);
        this.sphere = new MySphere(this, this.slices, this.stacks);
        this.cylinder = new MyCylinder(this , this.slices);
        this.cube = new MyCubeMap(this);
        this.state = new State_Machine(this);
        this.station = new PlaceStations(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayTrack = true;
        this.displayState = true;
        this.displayCube = false;
        this.displayStation = true;
        this.textureOn = 0;

        //materials
        this.material = new CGFappearance(this);
        this.material.setAmbient(0.3, 0.3, 0.3, 1);
        this.material.setDiffuse(0.6, 0.6, 0.6, 1);
        this.material.setSpecular(0.0, 0.0, 0.0, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/earth.jpg');

        this.textureOptions = {
            'Demo':0,
            'Test':1,
        }

    }
    
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera2(0.5, 0.1, 500, vec3.fromValues(30,30,30), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    updateTextures() {
        this.cube.updateTextures();
    }

    checkKeys() {

        var text = "Keys pressed: ";
        var keysPressed = false;

        if(this.gui.isKeyPressed("KeyR")) {
            this.state.crane.reset();
            text += " R";
            keysPressed = true;
        }

        if(this.gui.isKeyPressed("KeyW")) {
            this.state.crane.tilt(0.01);
            text += " W ";
            keysPressed = true;
        }

        if(this.gui.isKeyPressed("KeyS")) {
            this.state.crane.tilt(-0.01);
            text += " S ";
            keysPressed = true;
        }

        if(this.gui.isKeyPressed("KeyA")) {
            this.state.crane.turn(0.01);
            text += " A ";
            keysPressed = true;
        }

        if(this.gui.isKeyPressed("KeyD")) {
            this.state.crane.turn(-0.01);
            text += " D ";
            keysPressed = true;
        }

        if(this.state.currentState == 0 && this.gui.isKeyPressed("KeyC")) {
            this.state.currentState = 1;
        }

        if(keysPressed)
            console.log(text);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){

        this.checkKeys();
        
        this.state.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        if(this.displayState) this.state.display();
        
        if(this.displayStation) this.station.display();
        
        if(this.displayTrack) this.track.display();
        
        if(this.displayCube) this.cube.display();

        // ---- END Primitive drawing section
    }
}