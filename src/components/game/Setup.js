import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Water } from 'three/examples/jsm/objects/Water';
import Jet from '../../objects/Jet';

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
    loadDayEnvironment();

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
};

const loadModels = () => {
    const raptor = new Jet("/models/F22_Raptor/scene.gltf",   //Model path
                           {xpos: 0, ypos: -0.2, zpos: -3},   //Initial position
                           {xrot: 0, yrot: 1.56, zrot: 0},    //Initial orientation
                           loader,                            //GLTFLoader
                           () => {                            //Callback function for when model completes loading
                               scene.add(raptor.model);
                               document.addEventListener("keydown", (event) => raptor.moveJet(event));
                            });
};

const loadDayEnvironment = () => {
    let dayEnvironmentMaterials = [
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_ft.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_bk.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_up.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_dn.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_rt.tga"), side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({map: new TGALoader().load("/environment/miramar_lf.tga"), side: THREE.BackSide})
    ];
    
    let geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    let skybox = new THREE.Mesh(geometry, dayEnvironmentMaterials);
    scene.add(skybox);
    loadOcean();
    loadClouds();
};

const loadNightEnvironment = () => {
    let nightEnvironmentMaterials = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_ft.png"), side: THREE.BackSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_bk.png"), side: THREE.BackSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_up.png"), side: THREE.BackSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_dn.png"), side: THREE.BackSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_rt.png"), side: THREE.BackSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("/environment/nightsky_lf.png"), side: THREE.BackSide})
    ];

    let geometry = new THREE.BoxGeometry(1000, 1000, 1000);
    let skybox = new THREE.Mesh(geometry, nightEnvironmentMaterials);
    scene.add(skybox);
};

const loadLighting = () => {
    let light0 = new THREE.AmbientLight(0xffffff, 0.5);   //Create equal lighting in scene
    let light1 = new THREE.PointLight(0xffffff, 0.5);     //Radiate light from single point
    let light2 = new THREE.DirectionalLight(0xffffff, 2); //Light coming directly above (0, 1, 0) - set vector to change

    scene.add(light0);
    scene.add(light1);
    scene.add(light2);
};

const loadOcean = () => {
    let sunlight = new THREE.DirectionalLight(0xffffff, 2);
    let waterGeometry = new THREE.PlaneBufferGeometry(1000, 1000);
    let water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load( "/environment/waternormals.jpg", (texture) => {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        alpha: 1.0,
        sunDirection: sunlight.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
		fog: scene.fog !== undefined
    });

    water.rotation.x = - Math.PI / 2;
    water.position.y = -499;
    scene.add(water);
};

const loadClouds = () => {
    //Generate random coordinate WITHIN bounds of skybox
    const randomPosition = () => {
        let position = Math.floor(Math.random() * 1000);
        let sign = Math.floor(Math.random() * 2);
        return sign ? position : -position;
    }

    const randomScale = () => {
        return Math.random() * 30;
    }

    const randomRotation = () => {
        return Math.random() * 360;
    }

    let texture = THREE.ImageUtils.loadTexture("/environment/cloud.jpg");
    //How texture should be sampled from the image
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;

    let fog = new THREE.Fog(0xffffff, -100, 5000);
    let material = new THREE.ShaderMaterial({
		uniforms: {
			"map": { type: "t", value: texture },
			"fogColor" : { type: "c", value: fog.color },
			"fogNear" : { type: "f", value: fog.near },
			"fogFar" : { type: "f", value: fog.far },
		},
		depthWrite: false,
		depthTest: false,
		transparent: true
    });
    
    for (let i = 0; i < 500; i++) {
        let cloudTexture = THREE.ImageUtils.loadTexture("/environment/cloud.jpg");
        let cloudMaterial = new THREE.SpriteMaterial({
			map: cloudTexture,
			useScreenCoordinates: false,
			transparent:true,
            opacity: 0.1
        });
        
        let cloud = new THREE.Sprite(cloudMaterial);
        cloud.position.set(randomPosition(), randomPosition(), randomPosition());
        cloud.scale.set(randomScale(), randomScale(), randomScale());
        cloud.rotation.set(randomRotation(), randomRotation(), randomRotation());
        scene.add(cloud);
    }
};
