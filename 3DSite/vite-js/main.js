import './style.css'
import * as THREE from 'three';
import { PointLight, TorusGeometry } from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer( {
  canvas: document.querySelector( '#bg' ),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera );

// Create a model and asign material to that model
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true });
const material = new THREE.MeshStandardMaterial({color: 0xFF6347 });
const torus = new THREE. Mesh( geometry, material);

// add model to the scene
// scene.add(torus);  // this is annoying when you don't need it.

const pointLight = new THREE.PointLight( 0xFFFFFF );
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight( 0xFFFFFF );

// add the all ligths to the scene
scene.add(pointLight, ambientLight);

// show where the light is at.
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper( 200, 50 );
scene.add(lightHelper, gridHelper);

// add mouse controls
const controls = new OrbitControls(camera, renderer.domElement);


// let loader = new THREE.GLTFLoader();

// loader.load('SpaceShip.glb', function(gltf){
//   scene.add(gltf.scene);
//   renderer.render(scene, camera);
// });

const loader = new GLTFLoader();

loader.load('SpaceShip.glb', function(gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});


function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}

animate();