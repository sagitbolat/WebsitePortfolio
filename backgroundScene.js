import * as SphereAnim  from "./sphereAnimation.js";
import './style.css';
import * as THREE from 'three';

//scene declarations
let scene;
let camera;
let renderer;

export function setupScene(bg_color) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});
    scene.background = new THREE.Color(bg_color);
    //render setup
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(30); 
    renderer.render(scene, camera);
}
export function spawnSphere(fg_color, fg_accent_color) {
    SphereAnim.spawnSphere(scene, fg_color, fg_accent_color);

}

let scrollPercent = 0;


function playAnimations() {
    SphereAnim.playAnimation(scrollPercent);
}

//render loop / game loop
export function animate() {
    requestAnimationFrame(animate);
    playAnimations();
  
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