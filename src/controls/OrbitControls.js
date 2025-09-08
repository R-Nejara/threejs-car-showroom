import * as THREE from "three";
import { camera } from "../core/Camera.js";
import { canvas } from "../Selectors.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const controls = new OrbitControls(camera, canvas);

const updateControls = () => {
  controls.update();
};

export { controls, updateControls };
