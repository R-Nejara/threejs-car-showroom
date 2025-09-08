import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

const loader = new FontLoader();

const createTextObject = (text, fontUrl) => {
  return new Promise((resolve, reject) => {
    loader.load(fontUrl, (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
        size: 1,
        height: 1,
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.2,
        bevelSize: 0.03,
      });
      const textMaterial = new THREE.MeshBasicMaterial();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      resolve(textMesh);
    });
  });
};

export { createTextObject };
