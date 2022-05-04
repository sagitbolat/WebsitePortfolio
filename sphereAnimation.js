import * as THREE from 'three';
import * as LERP from './interpolation.js';


const particlesCount = 20000;
const sphereSizeStart = 100;
const sphereSizeEnd = 8;

let sphere;
let innerShape;
let particleMesh;



//mouse
document.addEventListener('mousemove', getMousePos);
let mouseX = 0;
let mouseY = 0;
function getMousePos(event) {
    mouseY = event.clientY;
    mouseX = event.clientX;
}

export function spawnSphere(scene) {
    
    //center sphere
    const sphereGeometry = new THREE.SphereGeometry(sphereSizeEnd, 40, 40);
    const mat = new THREE.PointsMaterial({color: 0xDE5D83, size:0.1});
    sphere = new THREE.Points(sphereGeometry, mat);
    

    //particles background
    const positionArray = new Float32Array(particlesCount*3);
    //xyz, xyz, xyz, xyz ...

    for (let i = 0; i < particlesCount*3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 100;
    }
    const particlesGeometry = new THREE.BufferGeometry;
    const particleMaterial = new THREE.PointsMaterial({color: 0xffffff, size:0.005})
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particleMesh = new THREE.Points(particlesGeometry, particleMaterial)
    particleMesh.position.y = -83;

    //add an inner shape
    const innerShapeGeometry = new THREE.BoxGeometry(4, 4, 4, 16, 16, 16);
    const innerShapeMaterial = new THREE.PointsMaterial({color: 0xffffff, size:0.005});
    innerShape = new THREE.Points(innerShapeGeometry, innerShapeMaterial);


    scene.add(sphere, particleMesh);
}
const clock = new THREE.Clock();
export function playAnimation(scrollPercent, camera) {
    const elapsedTime = clock.getElapsedTime();
    
    if (scrollPercent < 12 && scrollPercent > 2) {
        sphere.position.x = LERP.cosineInterpolation(0, 12, LERP.scalePercent(scrollPercent, 2, 12));
    } else if (scrollPercent >= 12) {
        particleMesh.position.y = LERP.lerp(-83, 75, LERP.scalePercent(scrollPercent, 12, 100));
        particleMesh.position.z = LERP.lerp(-10, 10, LERP.scalePercent(scrollPercent, 12, 100));
        if (scrollPercent > 90) {
            sphere.position.x = LERP.cosineInterpolation(12, 0, LERP.scalePercent(scrollPercent, 90, 100));
        }
    }

    sphere.rotation.x = (mouseY * 0.002) + (elapsedTime * 0.2);
    sphere.rotation.y = (-mouseX * 0.002)+ (elapsedTime * 0.2);
}