import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const style = {
    display: "block"
};

const Scene = (props) => {

    const [object, setObject] = useState(null);

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("myCanvas"), 
            antialias: true
        });

        renderer.setClearColor(0x000000);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        
        //LIGHTS
        var light = new THREE.AmbientLight(0xffffff, 10);
        scene.add(light);

        var light2 = new THREE.PointLight(0xffffff, 10);
        scene.add(light2);

        // camera.position.z = 100;
        camera.position.set(0, 0, 0);
        var loader = new GLTFLoader();

        loader.load('/models/F22_Raptor/scene.gltf', handle_load);

        var mesh;

        const handleObjectRotation = (event) => {
            switch(event.keyCode) {
                //UP
                case 87:
                    mesh.rotation.z += 0.01;
                    break;
                //DOWN
                case 83:
                    mesh.rotation.z -= 0.01;
                    break;
                //LEFT
                case 65:
                    mesh.rotation.y += 0.01;
                    console.log(mesh.rotation.y);
                    break;
                //RIGHT
                case 68:
                    mesh.rotation.y -= 0.01;
                    break;
                default:
            }
        };
        document.addEventListener("keydown", handleObjectRotation);
        function handle_load(gltf) {
            console.log(gltf);
            mesh = gltf.scene;            
            console.log(mesh.children[0]);
            scene.add( mesh );
            mesh.position.set(0, -0.2, -3);
            mesh.rotation.set(0, 1.56, 0);
        }

        var animate = function () {
            requestAnimationFrame( animate );
            // if (mesh)
            //     mesh.rotation.y += 0.01;
            renderer.render( scene, camera );
        };

        animate();
    });

    return(
        <canvas id="myCanvas" style={style}/>
    );
}

export default Scene;