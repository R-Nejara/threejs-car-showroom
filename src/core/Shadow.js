import * as THREE from "three";

const rendererShadowSetup = (renderer) => {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
};

const directionalLightShadowSetup = (directionalLight) => {
  directionalLight.shadow.normalBias = 0.2;
};
const spotLightShadowSetup = (spotLight) => {
  spotLight.shadow.normalBias = 0.1;
}

export { rendererShadowSetup, directionalLightShadowSetup, spotLightShadowSetup };
