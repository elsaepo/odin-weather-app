import './style.css';
import "./getWeather.js";
import getWeather from './getWeather.js';

const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';
let units = "metric";

// convert the city into the correct format before passing it to getWeather:
//
//
getWeather("Melbourne");