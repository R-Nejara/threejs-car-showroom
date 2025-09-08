import * as THREE from "three";
import { getObjectGroup } from "../loaders/GlbLoader";

const modelGroup = await getObjectGroup("/models/Golf5.glb");
modelGroup.traverse((child) => {
  child.castShadow = true;
  child.receiveShadow = true;
});

// Car And Sky Position As Vector3
const carPosition = new THREE.Vector3(-5.5, 2, -3);
const skyPosition = new THREE.Vector3(-5.5, 20, -3);

// Usefull Constants
const GROUND_LEVEL_SIDEWALK_Y = 0.6;
const GROUND_LEVEL_STREET_Y = 0.4;
const SKY_LEVEL_Y = skyPosition.y;

export {
  modelGroup,
  carPosition,
  skyPosition,
  GROUND_LEVEL_SIDEWALK_Y,
  GROUND_LEVEL_STREET_Y,
  SKY_LEVEL_Y,
};
