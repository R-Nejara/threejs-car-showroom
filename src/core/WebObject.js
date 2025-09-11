import * as THREE from "three";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { pannelSizes } from "./UserPannel";
import { pannelPosition } from "../utils/helpers";
import { camera } from "./Camera.js";

// Create Iframe Object
const iframe = document.createElement("iframe");
// Configure Iframe
iframe.src = "./info.html";
iframe.style.width = pannelSizes.width * 100 + "px";
iframe.style.height = pannelSizes.height * 100 + "px";
iframe.style.border = "0px";

// Transfer HTML Element Into CSS3DObject
const webObject = new CSS3DObject(iframe);

// Fix see through iframe
const normal = new THREE.Vector3(0, 0, 1).applyQuaternion(webObject.quaternion);
iframe.style.visibility =
  normal.dot(camera.position.clone().sub(webObject.position).normalize()) < 0
    ? "hidden"
    : "visible";

// Set webObject to Pannel Position
webObject.position.copy(pannelPosition);

// Lower Scale For More PPI
webObject.scale.setScalar(0.01);

export { webObject };
