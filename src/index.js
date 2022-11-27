import './style.css';
import processWeather from "./processWeather.js"
import getWeather from './getWeather.js';
import domController from "./domController.js"

const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';
let units = "metric";

// convert the city into the correct format before passing it to getWeather:
//
//
let weatherData = getWeather("Melbourne,Australia", "metric");
weatherData
.then(data => {
    return processWeather(data);
})
.then((weather) => {
    console.log(weather)
    domController.createWeather(weather)
})
.catch(err => {
    console.error(err)
})

