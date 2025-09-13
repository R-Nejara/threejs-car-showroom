// Canvas
const canvas = document.getElementById("main-canvas");

//Start Area
const startButton = document.getElementById("start-button");
const startText = document.getElementById("start-text");
const startButtonArea = document.getElementById("button-area");

//Overlay

//Day Night Switch
const dayNightSwitch = {
  ball: document.querySelector(".ball"),
  area: document.querySelector(".daynight-switch-area"),
  moon: document.querySelector(".moon"),
  sun: document.querySelector(".sun"),
};

export { canvas, startButton, startText, startButtonArea, dayNightSwitch };
