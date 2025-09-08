import * as THREE from "three";
import { camera } from "../core/Camera";
import { controls } from "../controls/OrbitControls";
import { gsap } from "gsap";
import { skyPosition, carPosition } from "../utils/helpers";

// Helper Variables
let isStarted = false;

// Start Animation_START:

const textFadeOutAnimation = (text) => {
  gsap.to(text.material, {
    opacity: 0,
    duration: 2,
  });
  gsap.to(text.rotation, {
    y: 0.1,
    duration: 5,
    delay: 0.4,
    ease: "power1.out",
  });
};

const cameraPositionAnimation = () => {
  gsap.to(camera.position, {
    y: carPosition.y,
    duration: 5,
    ease: "circ.inOut",
    delay: 0.3,
  });
};

const targetPositionAnimation = () => {
  gsap.to(controls.target, {
    x: carPosition.x,
    y: carPosition.y,
    z: carPosition.z,
    delay: 0.3,
    duration: 5,
    ease: "circ.inOut",
  });
};

const animateStart = () => {
  if (isStarted) return;
  isStarted = true;
  controls.target = skyPosition;
  camera.position.y = skyPosition.y;
  cameraPositionAnimation();
  targetPositionAnimation();
};

export { animateStart, textFadeOutAnimation };

// Start Animation_END:
