import * as THREE from "three";
import { camera } from "../core/Camera.js";
import { canvas } from "../Selectors.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { carPosition } from "../core/Showcase.js";

const controls = new OrbitControls(camera, canvas);
controls.target.copy(carPosition);

const updateControls = () => {
  controls.update();
};

export { controls, updateControls };
