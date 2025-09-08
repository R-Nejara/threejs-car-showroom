import * as THREE from "three";
import { camera } from "../core/Camera.js";
import { canvas } from "../Selectors.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { skyPosition } from "../utils/helpers.js";

const controls = new OrbitControls(camera, canvas);
controls.target.copy(skyPosition);

controls.enableDamping = true;
controls.enablePan = false;
controls.dampingFactor = 0.05;

// Disables Free movement
controls.enabled = false;

// Disables Unlimited Rotation
controls.minPolarAngle = 0.55;
controls.maxPolarAngle = Math.PI / 2;
// Limit Distance
controls.minDistance = 2;
controls.maxDistance = 30;

const updateControls = () => {
  controls.update();
};

const toggleControls = () => {
  controls.enabled = !controls.enabled;
};

export { controls, updateControls, toggleControls };
