import * as THREE from "three";
import { sizes, updateSizes } from "../utils/helpers";

// Initialize Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  2000
);

// Set Camera Position / Zoom
const cameraPosition = new THREE.Vector3(-15, 4, 9);

camera.position.copy(cameraPosition);
camera.zoom = 3;

// Updates Camera
camera.updateProjectionMatrix();

const recalculateViewport = () => {
  updateSizes();
  camera.aspect = sizes.aspect;
};

// Updates Projection Matrix And Recalculates Viewport
const updateCamera = () => {
  recalculateViewport();
  camera.updateProjectionMatrix();
};

export { camera, updateCamera };
