import { CSS3DRenderer } from "three/addons/renderers/CSS3DRenderer.js";
import { sizes, updateSizes } from "../utils/helpers";
import { scene } from "./Scene";
import { camera } from "./Camera";

// Initialize Renderer
const siteRenderer = new CSS3DRenderer();

// Set Renderer Size
siteRenderer.setSize(sizes.width, sizes.height);

// Add Dom Element To Body
document.body.appendChild(siteRenderer.domElement);

// Configure Dom Element
siteRenderer.domElement.style.position = "absolute";
siteRenderer.domElement.style.top = "0";
siteRenderer.domElement.style.pointerEvents = "none";

// Initial Render
siteRenderer.render(scene, camera);

// Render And Updade Functions
const renderSiteRenderer = () => {
  siteRenderer.render(scene, camera);
};

const updateSiteRenderer = () => {
  updateSizes();
  siteRenderer.setSize(sizes.width, sizes.height);
};

export { siteRenderer, renderSiteRenderer, updateSiteRenderer };
