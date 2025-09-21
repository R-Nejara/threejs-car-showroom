import * as THREE from "three";

// Helper Constants
// Positions
const carPosition = new THREE.Vector3(-2.5, 2, -1);
const skyPosition = new THREE.Vector3(-5.5, 25, -3);
const directionalLightPosition = new THREE.Vector3(25, 25, 25);

// Car Lights Positions
const headlightsPosition = new THREE.Vector3().copy(carPosition).add(new THREE.Vector3(-5,1,0));
const taillightsPosition = new THREE.Vector3().copy(carPosition).add(new THREE.Vector3(5,1,0));

// Lantern Positions
const LANTERN_FRONT_Z = -9;
const LANTERN_BACK_Z = 15;
const LANTERN_Y = 5;
const lanternPositionsX = [-13.5, -5.6, 1.1, 8.9];

// Ground and Sky Y Constants
const GROUND_LEVEL_SIDEWALK_Y = 0.6;
const GROUND_LEVEL_STREET_Y = 0.4;
const SKY_LEVEL_Y = skyPosition.y;

//Light Intensities
const SPOTLIGHT_ON_INTENSITY = 1000;
const SPOTLIGHT_OFF_INTENSITY = 0;
const LANTERNLIGHT_ON_INTENSITY = 3;
const LANTERNLIGHT_OFF_INTENSITY = 0;
const CARLIGHT_ON_INTENSITY = 100;
const CARLIGHT_OFF_INTENSITY = 0;

// Initialize Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  get aspect() {
    return this.width / this.height;
  },
};

// Calculates New Width and Height
const updateSizes = () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
};

const mobileMedia = window.matchMedia("(max-width: 860px)");

export {
  sizes,
  updateSizes,
  carPosition,
  skyPosition,
  directionalLightPosition,
  GROUND_LEVEL_SIDEWALK_Y,
  GROUND_LEVEL_STREET_Y,
  SKY_LEVEL_Y,
  mobileMedia,
  SPOTLIGHT_ON_INTENSITY,
  SPOTLIGHT_OFF_INTENSITY,
  LANTERNLIGHT_ON_INTENSITY,
  LANTERNLIGHT_OFF_INTENSITY,
  LANTERN_FRONT_Z,
  LANTERN_BACK_Z,
  LANTERN_Y,
  lanternPositionsX,
  headlightsPosition,
  taillightsPosition,
  CARLIGHT_ON_INTENSITY,
  CARLIGHT_OFF_INTENSITY,
};
