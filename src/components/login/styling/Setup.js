import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);


export const setupLoginAnimation = () => {
    //Setup webGL renderer
    let renderer = new THREE.WebGLRenderer({
        canvas: document.createElement("canvas"),
        antialias: true
    });
    document..id = "login-canvas"
    document.getElementById("login-canvas").style.display = "block";
    scene.fog = new THREE.FogExp2(0x87ceeb, 0.001);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    let light = new THREE.AmbientLight(0x555555);
    scene.add(light);

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}