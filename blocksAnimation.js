import * as THREE from 'three';
import { RGBA_BPTC_Format } from 'three';
import * as LERP from './interpolation.js';

let cubes = new Array(31);
for(let i = 0; i< cubes.length; i++){
    cubes[i] = new Array(8);
};
export function spawnCubes(scene) {
    const geo = new THREE.BoxGeometry(2, 2, 2);
    const mat = new THREE.MeshStandardMaterial({color: 0x3B5998});
    for(let x = 0; x < cubes.length; x++) {
        for (let y = 0; y < cubes[x].length; y++) {
            let cube = new THREE.Mesh(geo, mat);
            cube.position.z = -30;
            cube.position.y = 18 - y*3 - 1.5;
            cube.position.x = 45 - x*3;
            scene.add(cube);
        }
    }
    let light = new THREE.PointLight(0xffffff, 0.8, 3, 0);
    scene.add(light);
}

export function playAnimation(scrollPercent, camera) {
}