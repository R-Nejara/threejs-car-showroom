import * as THREE from "three"
import { carPosition, compilePositionArrays, skyPosition } from "../utils/helpers";
import { compileAndRender } from "./Renderer";

// Compiles the Scene from a set of Positions, that contain important angles

const warmup = (camera, controls) => {
  controls.target.copy(carPosition);
  const startCameraPosition = new THREE.Vector3().copy(camera.position);
  compilePositionArrays.forEach((pos) => {
    const position = new THREE.Vector3(pos[0], pos[1], pos[2]);
    camera.position.copy(position);
    compileAndRender();
  });

  // Reset Position
  camera.position.copy(startCameraPosition);
  controls.target.copy(skyPosition);
}
export { warmup }
