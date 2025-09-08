import * as THREE from "three";
import { camera } from "../core/Camera.js";
import { canvas } from "../Selectors.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { skyPosition } from "../utils/helpers.js";

const controls = new OrbitControls(camera, canvas);
controls.target.copy(skyPosition);

controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Disables Free movement
controls.enabled = false;
// Disables Unlimited Rotation
controls.minPolarAngle = 0.55;
controls.maxPolarAngle = Math.PI / 2;

const updateControls = () => {
  controls.update();
};

export { controls, updateControls };
