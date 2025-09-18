import * as THREE from "three";
import { camera } from "../core/Camera";
import { controls } from "../controls/OrbitControls";
import { gsap } from "gsap";
import { skyPosition, carPosition, SPOTLIGHTLIGHT_OFF_INTENSITY, SPOTLIGHT_ON_INTENSITY, LANTERNLIGHT_ON_INTENSITY, LANTERNLIGHT_OFF_INTENSITY } from "../utils/helpers";
import { overlay } from "../Selectors";
import { scene } from "../core/Scene";
import { directionalLight, lanternBackGroup, lanternFrontGroup, spotLight } from "../core/Light";
import { car } from "../core/Showcase";

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
    y: carPosition.y + 2,
    duration: 3,
    ease: "circ.inOut",
    delay: 4,
  });
};

const targetPositionAnimation = () => {
  gsap.to(controls.target, {
    x: carPosition.x,
    y: carPosition.y,
    z: carPosition.z,
    delay: 0.3,
    duration: 4.5,
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

const showOverlayAnimation = () => {
  overlay.global.overlay.classList.add("reveal-overlay");
};

// Start Animation_END:

//DayNightCycle Animation_START

//Animate Background Swap
const backgroundChangeAnimation = (targetColor) => {
  gsap.to(scene.background, {
    r: targetColor.r,
    g: targetColor.g,
    b: targetColor.b,
    duration: 2.5,
    delay: 0.3,
    ease: "power1.inOut",
  },
  );
}

//Animate Fog Swap
const fogChangeAnimation = (targetColor) => {
  gsap.to(scene.fog.color, {
    r: targetColor.r,
    g: targetColor.g,
    b: targetColor.b,
    duration: 2.5,
    delay: 0.3,
    ease: "power1.inOut",
  },
  );
}

//Animate Light Swap
const lightIntensityAnimation = (targetLightIntensity) => {
  gsap.to(directionalLight, {
    intensity: targetLightIntensity,
    duration: 2.5,
    delay: 0.3,
    ease: "power1.inOut",
  },
  );
}

//Animatate Sun setting
const sunsetAnimation = (targetSunHeight, targetSunDistance) => {

  gsap.to(directionalLight.position, {
    y: targetSunHeight,
    x: targetSunDistance,
    duration: 3.5,
    ease: "power1.inOut",
  },
  );
}

//Sunset Animation
const toggleSunset = (isDay) => {

  const targetSunHeight = isDay ? 0 : 25
  const targetSunDistance = isDay ? 100 : 35
  const targetLightIntensity = isDay ? 0 : 5;
  const darkColor = new THREE.Color("#283785");
  const lightColor = new THREE.Color("#89cff0");
  const targetColor = isDay ? darkColor : lightColor;

  backgroundChangeAnimation(targetColor);
  fogChangeAnimation(targetColor);
  lightIntensityAnimation(targetLightIntensity);
  sunsetAnimation(targetSunHeight, targetSunDistance);
}

//DayNightCycle Animation_END

const toggleSpotLight = (isDay) => {
  const targetLightIntensity = isDay ? SPOTLIGHT_ON_INTENSITY : SPOTLIGHTLIGHT_OFF_INTENSITY;
  const delay = isDay ? 3.5 : 0;
  const duration = isDay ? 0.2 : 0.4;
  gsap.to(spotLight, {
    intensity: targetLightIntensity,
    delay: delay,
    duration: duration,
    ease: "power4.out",
  })
}

const animateLanternLights = (lantern, targetLightIntensity, delay, duration) => {
  gsap.to(lantern, {
    intensity: targetLightIntensity,
    delay: delay,
    duration: duration,
  })
}

// Toggle Lantern Lights
const toggleLanternLights = (isDay) => {
  // Initialize Target Intensity, Delay and Duration for Animation
  const targetLightIntensity = isDay ? LANTERNLIGHT_ON_INTENSITY : LANTERNLIGHT_OFF_INTENSITY;
  const delay = isDay ? 4 : 0.5;
  const duration = isDay ? 1 : 0.4
  // Iterate through lantern groups and add animation
  lanternFrontGroup.traverse(lantern => animateLanternLights(lantern, targetLightIntensity, delay, duration));
  lanternBackGroup.traverse(lantern => animateLanternLights(lantern, targetLightIntensity, delay, duration));
}

//Car Animations_START

// Activates and Deactivates Car Headlights and Taillights
const toggleCarLights = () => {
  let isRunning;
};

// Folds Car Mirros In and Out
const toggleCarMirrors = (isActive) => {
  const targetRotation = isActive ? THREE.MathUtils.degToRad(-60) : 0;
  gsap.to(car.mirror.leftBody.rotation, {
    z: targetRotation,
    duration: 2.5
  })
  gsap.to(car.mirror.rightBody.rotation, {
    z: -targetRotation,
    duration: 2.5
  })
};

// Creates Map to Store Animations of Car Parts
const carTweens = new Map();

// Creates Map to Store Starting Positions of Car Parts
const originalYPositions = new Map();

// Activates and Deactivates Car Dance
const toggleCarDance = () => {
  let isRunning;
};

// Manages Everything Around The Car Animation
const carDanceAnimation = (carPart, isActive) => {

  if (!originalYPositions.has(carPart)) {
    originalYPositions.set(carPart, carPart.position.y)
  }

  if (!carTweens.has(carPart)) {
    // Creates Gsap Animation 
    const tween = carGsapAnimation(carPart)

    // Assinging Animation to carPart in Map
    carTweens.set(carPart, tween);
  } else {

    // Kills Animations
    carTweens.get(carPart).kill()

    // Resets carPart Position to origin Position
    resetYPosition(carPart, originalYPositions.get(carPart));

    // Deletes Map entry of carPart
    carTweens.delete(carPart);
  }
}

// Create Gsap Bounce Animation 
const carGsapAnimation = (carPart) => {
  const tween = gsap.to(carPart.position, {
    y: carPart.position.y + 0.05,
    duration: 0.17,
    yoyo: true,
    repeat: -1,
  })
  return tween;
}

// Animation for Resetting the Y Position
const resetYPosition = (carPart, originalY) => {
  gsap.to(carPart.position, {
    y: originalY,
    duration: 0.8,
  })
}


//Car Animations_END

export { animateStart, textFadeOutAnimation, showOverlayAnimation, toggleSunset, toggleSpotLight, toggleLanternLights, toggleCarMirrors };
