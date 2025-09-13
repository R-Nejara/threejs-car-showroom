import { animateStart, textFadeOutAnimation } from "../animations/Animations";
import { camera, updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
import {
  dayNightSwitch,
  startButton,
  startButtonArea,
  startText,
} from "../Selectors";
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
});

// OVERLAY EVENTLISTENER

// Day/Night switch
dayNightSwitch.area.addEventListener("click", function () {
  dayNightSwitch.ball.classList.toggle("ball-toggle");
  dayNightSwitch.moon.classList.toggle("moon-active");
  dayNightSwitch.sun.classList.toggle("sun-inactive");
  dayNightSwitch.area.classList.toggle("border-night");
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
