import * as THREE from "three";
import { camera } from "../core/Camera";
import { controls } from "../controls/OrbitControls";
import { gsap } from "gsap";
import { carPosition, skyPosition } from "../core/Showcase";

// Helper Variables
let isStarted = false;

// Start Animation_START:
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

export { skyPosition, animateStart };

// Start Animation_END:
