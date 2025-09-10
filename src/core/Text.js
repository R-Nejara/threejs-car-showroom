import * as THREE from "three";
import { createTextObject } from "../loaders/TextLoader.js";
import { fonts } from "../utils/fonts";
import { SKY_LEVEL_Y } from "../utils/helpers";

// Initialize Texts
const titleText = await createTextObject("Car Project", fonts.DROID_SANS_BOLD);
const nameText = await createTextObject(
  "BY \nRAYAN NEJARA",
  fonts.DROID_SANS_BOLD
);

// Set Initial Text Positions
titleText.position.copy(new THREE.Vector3(-2, SKY_LEVEL_Y + 2.5, -15));
nameText.position.copy(new THREE.Vector3(-2, SKY_LEVEL_Y + 1, -15));

// Set Initial Text Rotations
titleText.rotation.y = -0.6;
nameText.rotation.y = -0.7;

// Exports
export { titleText, nameText };
