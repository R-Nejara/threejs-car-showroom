import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
import { sizes } from "../utils/helpers";
import { scene } from "./Scene";
import { camera } from "./Camera";

// Initialize renderer
const siteRenderer = new CSS3DRenderer();

// Set Renderer Size
siteRenderer.setSize(sizes.width, sizes.height);

// Add dom Element to body
document.body.appendChild(siteRenderer.domElement);

// Configure dom Element
siteRenderer.domElement.style.position = "absolute";
siteRenderer.domElement.style.top = "0";
siteRenderer.domElement.style.pointerEvents = "none";

// Initial Render
siteRenderer.render(scene, camera);

export { siteRenderer };
