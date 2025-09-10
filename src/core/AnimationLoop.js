import { camera, updateCamera } from "./Camera.js";
import { updateControls } from "../controls/OrbitControls.js";
import { render } from "./Renderer.js";
import { renderSiteRenderer } from "./CSS3DRenderer.js";

// Render Loop
const runScene = () => {
  window.requestAnimationFrame(runScene);
  updateControls();
  render();
  renderSiteRenderer();
};

export { runScene };
