import * as THREE from 'three';

const CLOUD_COUNT = 50;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);

camera.rotation.set(1.16, -0.12, 0.27);
camera.position.z = 1;

export const setupLoginAnimation = () => {
    //Setup webGL renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("myCanvas"),
        antialias: true
    });

    scene.fog = new THREE.FogExp2(0x87ceeb, 0.001);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const light = new THREE.AmbientLight(0x555555);
    scene.add(light);

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load("/textures/smoke.png", texture => {
        const cloudGeometry = new THREE.PlaneBufferGeometry(500, 500);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });
    
        for (let i = 0; i < CLOUD_COUNT; i++) {
            let cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
    
            cloud.position.set(Math.random() * 800 - 400, 500, Math.random() * 500 - 500);
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random() * 2 * Math.PI;
            cloud.material.opacity = 0.55;
            scene.add(cloud);
        }
    }, undefined, error => {
        console.error(error);
    });

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
