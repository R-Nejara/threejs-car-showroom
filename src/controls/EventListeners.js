import {
  animateStart,
  showOverlayAnimation,
  textFadeOutAnimation,
} from "../animations/Animations";
import { camera, updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
import { overlay, startButton, startButtonArea, startText } from "../Selectors";
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
  startButtonArea.classList.add("hidden");
  textFadeOutAnimation(titleText);
  textFadeOutAnimation(nameText);
  toggleControls();
  animateStart();
  showOverlayAnimation();
});

// OVERLAY EVENTLISTENER

// Day/Night switch
overlay.dayNightSwitch.area.addEventListener("click", function () {
  overlay.dayNightSwitch.ball.classList.toggle("ball-toggle");
  overlay.dayNightSwitch.moon.classList.toggle("moon-active");
  overlay.dayNightSwitch.sun.classList.toggle("sun-inactive");
  overlay.dayNightSwitch.area.classList.toggle("border-night");
  overlay.bar.area.classList.toggle("bar-area-night");

  overlay.global.circle.forEach((circle) => {
    circle.classList.toggle("circle-night");
  });
  overlay.global.icon.forEach((icon) => {
    icon.classList.toggle("icon-night");
  });
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
