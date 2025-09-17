import * as THREE from "three";
import { getObjectGroup } from "../loaders/GlbLoader";

const modelGroup = await getObjectGroup("/models/Golf5.glb");
modelGroup.traverse((child) => {
  child.castShadow = true;
  child.receiveShadow = true;
});

// Get Headlights, Taillights, Mirrors and Car Base into car Array
const carPartsNames = ["Headlights", "Taillights", "Mirror_Left", "Mirror_Right", "Mirror_Right_Holder", "Mirror_Left_Holder", "Tire_Front_Right", "Tire_Front_Left", "Tire_Back_Right", "Tire_Back_Left", "Front_Logo", "Tail_Logo"];
const carArray = [];

modelGroup.traverse((child) => {
  if (carPartsNames.includes(child.name)) {
    carArray.push(child);
  }
});

// Organize Car Parts into an Usable Object
const car = {
  mirror: {
    leftBody: carArray[2],
    leftHolder: carArray[3],
    rightBody: carArray[4],
    leftHolder: carArray[5],
  },

  lights: {
    taillights: carArray[1],
    headlights: carArray[0],
  },

  logo: {
    front: carArray[10],
    back: carArray[11],
  },

  tires: {
    frontLeft: carArray[8],
    frontRight: carArray[9],
    backLeft: carArray[7],
    backRight: carArray[6],
  },
}

export { modelGroup, car };
