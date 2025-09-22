import "./style.css";
import { runScene } from "./core/AnimationLoop";
import { camera } from "./core/Camera";
import { warmup } from "./core/Compile";
import { controls } from "./controls/OrbitControls";

warmup(camera, controls);
runScene();
