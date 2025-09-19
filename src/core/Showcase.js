import * as THREE from "three";
import { getObjectGroup } from "../loaders/GlbLoader";

// Initialize Map to Store Car Parts
const carMap = new Map();
// Get Headlights, Taillights, Mirrors and Car Base into car Array
const carPartsNames = ["Headlights", "Taillights", "Mirror_Left", "Mirror_Right", "Mirror_Right_Holder", "Mirror_Left_Holder", "Tire_Front_Right", "Tire_Front_Left", "Tire_Back_Right", "Tire_Back_Left", "Front_Logo", "Tail_Logo", "Car_Base"];
const carArray = [];
// Setup Shadow for Model Objects
const setShadows = (child) => {
  child.castShadow = true;
  child.receiveShadow = true;
}


const modelGroup = await getObjectGroup("/models/Golf5.glb");
modelGroup.traverse((child) => {
  setShadows(child);
});

modelGroup.traverse((child) => {
  if (carPartsNames.includes(child.name)) {
    carArray.push(child);
  }
});

// Organize Car Parts into an Usable Object
const car = {
  mirror: {
    leftBody: carArray[3],
    leftHolder: carArray[4],
    rightBody: carArray[5],
    rightHolder: carArray[6],
  },

  lights: {
    taillights: carArray[2],
    headlights: carArray[1],
  },

  logo: {
    front: carArray[11],
    back: carArray[12],
  },

  tires: {
    frontLeft: carArray[9],
    frontRight: carArray[10],
    backLeft: carArray[8],
    backRight: carArray[7],
  },
  allParts: carArray,
}

export { modelGroup, car };
