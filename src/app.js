import "regenerator-runtime";
import imageCover from "./assets/image-1.jpg";
import "./styles/style.css";
import "./script/component/nav-bar.js";
import "./script/component/cocktail-variant.js";
import main from "./script/view/main.js";

document.querySelector('#imageFigure').src = imageCover;
document.addEventListener("DOMContentLoaded", main);