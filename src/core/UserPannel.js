import * as THREE from "three";
import { pannelPosition } from "../utils/helpers";

const pannelGeometry = new THREE.BoxGeometry(5, 3, 0.2);
const pannelMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const pannelMesh = new THREE.Mesh(pannelGeometry, pannelMaterial);

pannelMesh.position.copy(pannelPosition);

export { pannelMesh };
