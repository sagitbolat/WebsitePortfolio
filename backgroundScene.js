import * as BlockAnim from "./blocksAnimation.js";
import * as SphereAnim  from "./sphereAnimation.js";
import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as LERP from './interpolation.js';

//scene declarations
let scene;
let camera;
let renderer;
//let controls;

export function setupScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});

    //render setup
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30); 
    renderer.render(scene, camera);

    //setup orbit controls
    //controls = new OrbitControls(camera, renderer.domElement);
}
export function spawnSphere() {
    /*const geo = new THREE.SphereGeometry(40, 100);
    const mat = new THREE.MeshBasicMaterial({color: 0x3B5998, wireframe: true});
    const sphere = new THREE.Mesh(geo, mat);
    const sphere2 = new THREE.Mesh(geo, mat);
    sphere2.position.z = 90;
    sphere2.position.x = 70; */
    SphereAnim.spawnSphere(scene);

}

let scrollPercent = 0;


function playAnimations() {
    /*objects[0].rotation.x = LERP.lerp(0, 4*Math.PI, LERP.scalePercent(scrollPercent, 0, 100));
    
    if (scrollPercent < 45) {
        camera.position.z = LERP.lerp(0, 60, LERP.scalePercent(scrollPercent, 0, 45))
    } else if (scrollPercent > 55) {
        camera.position.z = LERP.lerp(60, 0, LERP.scalePercent(scrollPercent, 55, 100))
    }*/
    SphereAnim.playAnimation(scrollPercent);
}

//render loop / game loop
export function animate() {
    requestAnimationFrame(animate);
    playAnimations();
    //controls.update();
  
    renderer.render(scene, camera);
}

/*/////////////---Helpers---///////////// */

//scroll animation setup
function OnScroll() {
  //calculate the current scroll progress as a percentage
  scrollPercent =
      ((document.documentElement.scrollTop || document.body.scrollTop) /
          ((document.documentElement.scrollHeight ||
              document.body.scrollHeight) -
              document.documentElement.clientHeight)) *
      100;
}
document.body.onscroll = OnScroll;
function addObject(obj) {
    scene.add(obj);
}