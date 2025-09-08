import * as THREE from "three";
import { getObjectGroup } from "../loaders/GlbLoader";

const modelGroup = await getObjectGroup("/models/Golf5.glb");
modelGroup.traverse((child) => {
  child.castShadow = true;
  child.receiveShadow = true;
});

// Car and Sky Position as Vector3
const carPosition = new THREE.Vector3(-5.5, 2, -3);
const skyPosition = new THREE.Vector3(-5.5, 20, -3);

export { modelGroup, carPosition, skyPosition };
