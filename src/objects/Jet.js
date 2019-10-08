import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Jet {

    /**
     * Jet constructor.
     * 
     * @param {string} modelPath - Relative path to model (models are in /public).
     * @param {object} position - Position of model.
     * @param {object} rotation - Orientation of model.
     * @param {GLTFLoader} loader - Used to load the model.
     */
    constructor(modelPath, position, rotation, loader) {
        this.position = position;
        this.rotation = rotation;

        loader.load(modelPath, (gltf) => {
            this.model = gltf.scene;
            this.model.position.set(position.xpos, position.ypos, position.zpos);
            this.model.rotation.set(rotation.xrot, rotation.yrot, rotation.zrot);
        });
    }

    // modelLoaderWrapper(modelPath, loader) {
    //     return new Promise((resolve, reject) => {
    //             if (gltf.scene) {
    //                 resolve(gltf.scene);
    //             } else { 
    //                 console.log(`LoadError: Model failed to load - ${modelPath}`);
    //                 reject(`LoadError: Model failed to load - ${modelPath}`);
    //             }
    //         });
    // }
}

export default Jet;