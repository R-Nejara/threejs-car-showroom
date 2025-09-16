import * as THREE from "three";
import { directionalLightShadowSetup } from "./Shadow";
import { directionalLightPosition } from "../utils/helpers";

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
const lights = new THREE.Group();

directionalLight.position.copy(directionalLightPosition);
directionalLight.castShadow = true;
directionalLight.add(new THREE.AxesHelper(10));

directionalLightShadowSetup(directionalLight);

lights.add(directionalLight, ambientLight);

export { lights, directionalLight };
