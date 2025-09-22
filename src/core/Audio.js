const switchSound = new Audio("audios/light-switch.mp3");
const playSwitch = () => {
  switchSound.play();
}
const muteButtonSound = new Audio("audios/button.mp3");
const playButton = () => {
  muteButtonSound.volume = 0.6
  muteButtonSound.play();
}

const trafficSound = new Audio("audios/traffic.mp3")
const playTraffic = () => {
  trafficSound.volume = 0.6;
  trafficSound.play();
}
const barButtonSound = new Audio("audios/bar_button.mp3")
const playBarButton = () => {
  barButtonSound.volume = 0.6;
  barButtonSound.play()
}
const carMusic = new Audio("audios/billy_bounce.wav")
const playCarMusic = (isActive) => {
  carMusic.volume = 0.8
  carMusic.play();
  if (!isActive) carMusic.pause()

}

const muteSounds = (isMuted) => {
  trafficSound.muted = isMuted;
  barButtonSound.muted = isMuted;
  switchSound.muted = isMuted;
  carMusic.muted = isMuted;
}

export { playSwitch, playTraffic, muteSounds, playButton, playBarButton, playCarMusic }
