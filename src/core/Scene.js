import * as THREE from "three";
import { camera } from "./Camera.js";
import { modelGroup } from "./Showcase.js";
import { lights } from "./Light.js";
// Initialize Scene
const scene = new THREE.Scene();

// Fog
scene.fog = new THREE.Fog("#0088ff", 15, 40);
scene.background = new THREE.Color("#0088ff");

// Addings To Scene
scene.add(camera);
scene.add(modelGroup);
scene.add(lights);
export { scene };
