import './style.css';
import * as SCENE from './backgroundScene.js';

let background_color = 0x222831;
let foreground_color = 0xDDDDDD;
let foreground_accent_color = 0xF05454;
SCENE.setupScene(background_color);
SCENE.spawnSphere(foreground_color, foreground_accent_color);
SCENE.animate();
