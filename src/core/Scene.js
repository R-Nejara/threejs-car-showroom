import * as THREE from "three";
import { camera } from "./Camera.js";
import { modelGroup } from "./Showcase.js";
import { carLights, lanternBackGroup, lanternFrontGroup, lights } from "./Light.js";
import { nameText, titleText } from "./Text.js";
// Initialize Scene
const scene = new THREE.Scene();

// Fog
scene.fog = new THREE.Fog("#89cff0", 15, 40);
scene.background = new THREE.Color("#89cff0");

// Addings To Scene
scene.add(camera);
scene.add(modelGroup);
scene.add(lights);
scene.add(titleText);
scene.add(nameText);
scene.add(lanternFrontGroup);
scene.add(lanternBackGroup);
scene.add(carLights)

export { scene };
