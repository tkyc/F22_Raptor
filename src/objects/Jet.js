class Jet {

    /**
     * Jet constructor.
     * 
     * @param {string} modelPath - Relative path to model (models are in /public).
     * @param {object} position - Position of model.
     * @param {object} rotation - Orientation of model.
     * @param {GLTFLoader} loader - Used to load the model.
     * @param {function} callback - The callback function for when the model completes loading.
     */
    constructor(modelPath, position, rotation, loader = null, callback = null) {
        this.loader = loader;
        this.callback = callback;

        if (loader)
            loader.load(modelPath, (gltf) => {
                this.model = gltf.scene;
                this.model.position.set(position.xpos, position.ypos, position.zpos);
                this.model.rotation.set(rotation.xrot, rotation.yrot, rotation.zrot);
                callback();
            });
    }

    /**
     * Changes jet's position.
     * 
     * @param {KeyboardEvent} event - Keyboard event.
     */
    moveJet(event) {
        switch(event.keyCode) {
            //UP
            case 87:
                this.model.position.z -= 0.01;
                break;
            //DOWN
            case 83:
                this.model.position.z += 0.01;
                break;
            //LEFT
            case 65:
                this.model.position.x -= 0.01;
                break;
            //RIGHT
            case 68:
                this.model.position.x += 0.01;
                break;
            default:
        }
    }
}

export default Jet;