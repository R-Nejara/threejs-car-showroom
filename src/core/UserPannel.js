import * as THREE from "three";

const pannelGeometry = new THREE.BoxGeometry(10, 5, 1);
const pannelMaterial = new THREE.MeshStandardMaterial({ color: "white" });
const pannelMesh = new THREE.Mesh(pannelGeometry, pannelMaterial);
