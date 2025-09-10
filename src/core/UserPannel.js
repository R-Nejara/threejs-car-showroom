import * as THREE from "three";
import { pannelPosition } from "../utils/helpers";

const pannelSizes = {
  width: 5,
  height: 3,
  depth: 0.2,
};

const pannelGeometry = new THREE.BoxGeometry(
  pannelSizes.width,
  pannelSizes.height,
  pannelSizes.depth
);
const pannelMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const pannelMesh = new THREE.Mesh(pannelGeometry, pannelMaterial);

pannelMesh.position.copy(pannelPosition);

export { pannelMesh, pannelSizes };
