// Canvas
const canvas = document.getElementById("main-canvas");

//Start Area
const startButton = document.getElementById("start-button");
const startText = document.getElementById("start-text");
const startButtonArea = document.getElementById("button-area");

//Overlay

//Day Night Switch
const overlay = {
  dayNightSwitch: {
    ball: document.querySelector(".ball"),
    area: document.querySelector(".daynight-switch-area"),
    moon: document.querySelector(".moon"),
    sun: document.querySelector(".sun"),
  },
  bar: {
    icons: {
      lowBeam: document.querySelector(".low-beam"),
      mirror: document.querySelector(".mirror"),
      spiral: document.querySelector(".spiral"),
    },
    areas: {
      lowBeam: document.querySelector(".low-beam-icon-area"),
      mirror: document.querySelector(".mirror-icon-area"),
      spiral: document.querySelector(".spiral-icon-area"),
    },
    area: document.querySelector(".bar-area"),
  },
  volume: {
    icon: document.querySelector(".volume"),
    muteIcon: document.querySelector(".mute"),
    area: document.querySelector(".sound-switch-area"),
  },
  global: {
    circle: document.querySelectorAll(".circle"),
    icon: document.querySelectorAll(".icon"),
    overlay: document.querySelector(".overlay"),
  },
};

export { canvas, startButton, startText, startButtonArea, overlay };
