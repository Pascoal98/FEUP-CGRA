import { CGFobject } from "../lib/CGF.js";

export class MyCircle extends CGFobject { 

    constructor(scene, nsides) {
        super(scene);

        this.scene = scene;
        this.nsides = nsides;
        this.initBuffers();
    }

    initBuffers() {
        
        this.vertices = [];
        //Counter-clockwise reference of vertices
		this.indices = [];

		//Facing Z positive
		this.normals = [];

        var angle = 2 * Math.PI / this.nsides;

        for(let i = 0; i < this.nsides; i++) {
            this.vertices.push(Math.cos(3 * i * angle), Math.sin(3 * i * angle), 0);
            this.vertices.push(Math.cos((3* i+1) * angle), Math.sin((3 * i+1) * angle), 0);
            this.vertices.push(0,0,0);
            this.indices.push(1+i*3,2+i*3,0+i*3);

            this.normals.push(0, 0, 1,
                              0, 0, 1,
                              0, 0, 1);
        }

        console.log(this.vertices);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}