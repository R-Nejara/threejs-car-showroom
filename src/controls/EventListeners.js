import { animateStart, textFadeOutAnimation } from "../animations/Animations";
import { camera, updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
import { startButton, startText } from "../Selectors";
import { toggleControls, updateControls } from "./OrbitControls";
import { titleText, nameText } from "../core/Text";
import { mobileMedia } from "../utils/helpers";
import { updateSiteRenderer } from "../core/CSS3DRenderer";
window.addEventListener("resize", () => {
  updateCamera();
  updateRenderer();
  updateSiteRenderer();
});

startButton.addEventListener("click", function () {
  startButton.classList.add("hidden");
  textFadeOutAnimation(titleText);
  textFadeOutAnimation(nameText);
  toggleControls();
  animateStart();
});

// MOBILE EVENTLISTENER

// Initial Mobile Request
const changeOnMobile = (mobileMedia) => {
  if (mobileMedia.matches) {
    camera.fov = 100;
    camera.zoom = 2;
    camera.updateProjectionMatrix();
  } else {
    camera.fov = 75;
  }
};

changeOnMobile(mobileMedia);

mobileMedia.addEventListener("change", function () {
  changeOnMobile(mobileMedia);
});
window.addEventListener("resize", function () {
  changeOnMobile(mobileMedia);
});
