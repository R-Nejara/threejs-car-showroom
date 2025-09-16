import * as THREE from "three";
import { directionalLightShadowSetup, spotLightShadowSetup } from "./Shadow";
import { carPosition, directionalLightPosition, SPOTLIGHTLIGHT_OFF_INTENSITY } from "../utils/helpers";

// Initialize Lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
const spotLight = new THREE.SpotLight(0xffffff, SPOTLIGHTLIGHT_OFF_INTENSITY, 0, 0.2, 1);

// Initialize Lights Group
const lights = new THREE.Group();

// Configure Spotlight
spotLight.position.copy(carPosition).add(new THREE.Vector3(0, 15, 0));
spotLight.castShadow = true;
spotLight.target.position.copy(carPosition);

// Configure Directional Light
directionalLight.position.copy(directionalLightPosition);
directionalLight.castShadow = true;
directionalLight.add(new THREE.AxesHelper(10));

// Run Shadow Setups
directionalLightShadowSetup(directionalLight);
spotLightShadowSetup(spotLight);

/*
 *==========
 *=LANTERNS=
 *==========
 */

// Initialize Lantern lights
const createLanternGroup = (positions) => {

  // Initialize Lantern Group
  const lanternGroup = new THREE.Group()

  // Loop Through Array filled with Vector3 elements
  positions.forEach((position, index) => {
    // Initialize Lantern
    const lantern = new THREE.PointLight("#FFA300", LANTERNLIGHT_OFF_INTENSITY, 0, 1.5);
    // lantern.power = 5;
    // Set Position of Lantern
    lantern.position.copy(position);
    lantern.name = "lantern" + (index + 1)

    // Add Lantern to LanternGroup
    lanternGroup.add(lantern);
  });
  return lanternGroup;
}

// Add Lights To Group
lights.add(directionalLight, ambientLight, spotLight, spotLight.target);

export { lights, directionalLight, spotLight };
