import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Jet from './objects/Jet';

const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

export const setupScene = () => {
    //Setup webGL renderer
    let renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("myCanvas"), 
        antialias: true
    });

    let controls = new OrbitControls(camera, document.getElementById("myCanvas"));
    controls.minDistance = 1;
    controls.maxDistance = 400;
    
    camera.position.set(0, 0, 0);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Load models, environment, lighting and animate
    loadLighting();
    loadModels();
    loadEnvironment();
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}

const loadModels = () => {
    const raptor = new Jet("/models/F22_Raptor/scene.gltf",   //Model path
                           {xpos: 0, ypos: -0.2, zpos: -3},   //Initial position
                           {xrot: 0, yrot: 1.56, zrot: 0},    //Initial orientation
                           loader,                            //GLTFLoader
                           () => {                            //Callback function for when model completes loading
                               scene.add(raptor.model);
                               document.addEventListener("keydown", (event) => raptor.moveJet(event));
                            });
}

const loadEnvironment = () => {
    //Day environment
    let dayEnvironmentMaterials = [
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_ft.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_bk.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_up.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_dn.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_rt.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_lf.tga"), side: THREE.BackSide})
    ];

    //Night environment
    // let nightEnvironmentMaterials = [
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( "/environment/nightsky_ft.png" ), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( '/environment/nightsky_bk.png' ), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( '/environment/nightsky_up.png' ), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( '/environment/nightsky_dn.png' ), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( '/environment/nightsky_rt.png' ), side: THREE.BackSide}),
    //     new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load( '/environment/nightsky_lf.png' ), side: THREE.BackSide})
    // ];

    let geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    let skybox = new THREE.Mesh(geometry, dayEnvironmentMaterials);
    scene.add(skybox);
}
//http://danni-three.blogspot.com/2013/09/threejs-heightmaps.html
const loadLighting = () => {
    let light0 = new THREE.AmbientLight(0xffffff, 0.5);   //Create equal lighting in scene
    let light1 = new THREE.PointLight(0xffffff, 0.5);     //Radiate light from single point
    let light2 = new THREE.DirectionalLight(0xffffff, 2); //Light coming directly above (0, 1, 0) - set vector to change

    scene.add(light0);
    scene.add(light1);
    scene.add(light2);
}