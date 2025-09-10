import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { pannelSizes } from "./UserPannel";

// Create Iframe Object
const iframe = document.createElement("iframe");
// Configure Iframe
iframe.src =
  "https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer.domElement";
iframe.style.width = pannelSizes.width * 100 + "px";
iframe.style.height = pannelSizes.height * 100 + "px";

// Transfer HTML Element Into CSS3DObject
const webObject = new CSS3DObject(iframe);

// Lower Scale For More PPI
webObject.scale.setScalar(0.01);

export { webObject };
