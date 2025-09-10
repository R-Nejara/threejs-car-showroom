import * as THREE from "three";

// Helper Constants
// Positions
const carPosition = new THREE.Vector3(-2.5, 2, -1);
const skyPosition = new THREE.Vector3(-5.5, 25, -3);
const pannelPosition = new THREE.Vector3(-2.25, 3, -9.5);

// Ground and Sky Y Constants
const GROUND_LEVEL_SIDEWALK_Y = 0.6;
const GROUND_LEVEL_STREET_Y = 0.4;
const SKY_LEVEL_Y = skyPosition.y;

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
  pannelPosition,
  GROUND_LEVEL_SIDEWALK_Y,
  GROUND_LEVEL_STREET_Y,
  SKY_LEVEL_Y,
  mobileMedia,
};
