import { animateStart, textFadeOutAnimation } from "../animations/Animations";
import { updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
import { startButton, startText } from "../Selectors";
import { toggleControls } from "./OrbitControls";
import { titleText, nameText } from "../core/Text";
window.addEventListener("resize", () => {
  updateCamera();
  updateRenderer();
});

startButton.addEventListener("click", function () {
  startButton.classList.add("hidden");
  textFadeOutAnimation(titleText);
  textFadeOutAnimation(nameText);
  toggleControls();
  animateStart();
});
