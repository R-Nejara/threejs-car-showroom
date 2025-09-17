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

export { modelGroup };
