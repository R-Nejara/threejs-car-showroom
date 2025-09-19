import * as THREE from "three";
import { directionalLightShadowSetup, spotLightShadowSetup } from "./Shadow";
import { carPosition, directionalLightPosition, LANTERN_BACK_Z, LANTERN_FRONT_Z, LANTERN_Y, LANTERNLIGHT_OFF_INTENSITY, lanternPositionsX , SPOTLIGHTLIGHT_OFF_INTENSITY } from "../utils/helpers";

// Initialize Lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.02);
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
    // Set Position of Lantern
    lantern.position.copy(position);
    lantern.name = "lantern" + (index + 1)

    // Add Lantern to LanternGroup
    lanternGroup.add(lantern);
  });
  return lanternGroup;
}

const lanternRow = (xPositions, normalY, normalZ) => {
  let lanternPositions = [];
  xPositions.forEach((xPosition) => {
    const lanternPositionVector = new THREE.Vector3(xPosition, normalY, normalZ);
    lanternPositions.push(lanternPositionVector);
  });
  return lanternPositions;
};

const frontLanternPositions = lanternRow(lanternPositionsX, LANTERN_Y, LANTERN_FRONT_Z);
const backLanternPositions = lanternRow(lanternPositionsX, LANTERN_Y, LANTERN_BACK_Z);

const lanternFrontGroup = createLanternGroup(frontLanternPositions);
const lanternBackGroup = createLanternGroup(backLanternPositions);

// Add Lights To Group
lights.add(directionalLight, ambientLight, spotLight, spotLight.target);

export { lights, directionalLight, spotLight, lanternFrontGroup, lanternBackGroup };
