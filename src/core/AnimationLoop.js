import { camera, updateCamera } from "./Camera.js";
import { updateControls } from "../controls/OrbitControls.js";
import { render } from "./Renderer.js";

// Render Loop
const runScene = () => {
  window.requestAnimationFrame(runScene);
  updateControls();
  render();
};

export { runScene };
