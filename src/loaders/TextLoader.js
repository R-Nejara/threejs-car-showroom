import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

const loader = new FontLoader();

const createTextObject = (text, fontUrl) => {
  return new Promise((resolve, reject) => {
    loader.load(fontUrl, (font) => {
      const textGeometry = new TextGeometry(text, {
        font: font,
      });
      const textMaterial = new THREE.MeshBasicMaterial();
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      resolve(textMesh);
    });
  });
};

export { createTextObject };
