import {
  animateStart,
  showOverlayAnimation,
  textFadeOutAnimation,
  toggleCarDance,
  toggleCarLights,
  toggleCarMirrors,
  toggleLanternLights,
  toggleSpotLight,
  toggleSunset,
} from "../animations/Animations";
import { camera, updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
import { overlay, startButton, startButtonArea } from "../Selectors";
import { toggleControls } from "./OrbitControls";
import { titleText, nameText } from "../core/Text";
import { mobileMedia } from "../utils/helpers";
import { muteSounds, playBarButton, playButton, playCarMusic, playSwitch, playTraffic } from "../core/Audio";

window.addEventListener("resize", () => {
  updateCamera();
  updateRenderer();
  stopTransition();
});

startButton.addEventListener("click", function () {
  startButton.classList.add("hidden");
  startButtonArea.classList.add("hidden");
  textFadeOutAnimation(titleText);
  textFadeOutAnimation(nameText);
  toggleControls();
  animateStart();
  showOverlayAnimation();
  playTraffic();
});

// OVERLAY EVENTLISTENER

//Bar Buttons
overlay.bar.areas.lowBeam.addEventListener("click", function () {
  overlay.bar.icons.lowBeam.classList.toggle("low-beam-active");
  const isActive = overlay.bar.icons.lowBeam.classList.contains(("low-beam-active"));
  toggleCarLights(isActive);
  playBarButton();
});
overlay.bar.areas.mirror.addEventListener("click", function () {
  overlay.bar.icons.mirror.classList.toggle("mirror-active");
  const isActive = overlay.bar.icons.mirror.classList.contains("mirror-active");
  toggleCarMirrors(isActive);
  playBarButton();
});
overlay.bar.areas.spiral.addEventListener("click", function () {
  overlay.bar.icons.spiral.classList.toggle("icon-active");
  const isActive = overlay.bar.icons.spiral.classList.contains("icon-active")
  toggleCarDance();
  playBarButton();
  playCarMusic(isActive);
});

//Sound Switch
overlay.volume.area.addEventListener("click", function () {
  overlay.volume.icon.classList.toggle("volume-hide");
  overlay.volume.muteIcon.classList.toggle("volume-hide");
  const isMuted = !overlay.volume.muteIcon.classList.contains("volume-hide");
  muteSounds(isMuted)
  playButton();
});

// Day/Night Switch
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
  
  // Initilize variable to show if it's Daytime
  const isDay = overlay.dayNightSwitch.sun.classList.contains("sun-inactive");
  toggleSunset(isDay);
  // toggleSpotLight(isDay);
  toggleLanternLights(isDay);
  playSwitch();
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

const stopTransition = () => {
  document.body.classList.add("no-transition");
  clearTimeout(window._resizeTimeout);
  window._resizeTimeout = setTimeout(() => {
    document.body.classList.remove("no-transition");
  }, 400);
};
