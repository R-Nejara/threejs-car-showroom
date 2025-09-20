import * as THREE from "three";
import { getObjectGroup } from "../loaders/GlbLoader";

// Initialze  Array to Store Lantern Glass
const lanternGlassArray = [];

// Initialize Map to Store Car Parts
const carMap = new Map();

// Get Headlights, Taillights, Mirrors and Car Base into car Array
const carPartsNames = ["Headlights", "Taillights", "Mirror_Left", "Mirror_Right", "Mirror_Right_Holder", "Mirror_Left_Holder", "Tire_Front_Right", "Tire_Front_Left", "Tire_Back_Right", "Tire_Back_Left", "Front_Logo", "Tail_Logo", "Car_Base"];

// Setup Shadow for Model Objects
const setShadows = (child) => {
  child.castShadow = true;
  child.receiveShadow = true;
}
// Fills Car Map with Part Names as Key and Object3D as Value
const fillCarMap = (child) => {
  if (carPartsNames.includes(child.name)) {
    carMap.set(child.name, child);
  }
}

// Setup Lantern Glass Material Properties and store Lantern Glass in Array
const lanternGlassSetup = (child) => {
  if (child.name.startsWith("LanternGlass")) {
    child.material = new THREE.MeshBasicMaterial({ color: "#392008", transparent: true, opacity: 0.7 });
    lanternGlassArray.push(child);
  }
}

// Storing Glb Object
const modelGroup = await getObjectGroup("/models/Golf5.glb");

// Iterate Through Glb Children Objects
modelGroup.traverse((child) => {
  // Configuration
  lanternGlassSetup(child);
  setShadows(child);
  fillCarMap(child);
});

// Organize Car Parts into an Usable Object
const car = {
  mirror: {
    leftBody: carMap.get("Mirror_Left"),
    leftHolder: carMap.get("Mirror_Left_Holder"),
    rightBody: carMap.get("Mirror_Right"),
    rightHolder: carMap.get("Mirror_Right_Holder"),
  },

  lights: {
    taillights: carMap.get("Taillights"),
    headlights: carMap.get("Headlights"),
  },

  logo: {
    front: carMap.get("Front_Logo"),
    back: carMap.get("Tail_Logo"),
  },

  tires: {
    frontLeft: carMap.get("Tire_Front_Left"),
    frontRight: carMap.get("Tire_Front_Right"),
    backLeft: carMap.get("Tire_Back_Left"),
    backRight: carMap.get("Tire_Back_Right"),
  },
  allParts: carMap,
}

export { modelGroup, car, lanternGlassArray };
