import './style.css';
import processWeather from "./processWeather.js"
import getWeather from './getWeather.js';
import domController from "./domController.js";

let units = "metric";
let location = "Melbourne,Australia";

domController.eventEmitter.on("weather-city", (city) => {
    location = city;
    weather();
})

function weather(){
    let weather = getWeather(location, units);
    weather
    .then(data => {
        data.weatherData = processWeather(data.weatherData);
        return data;
    })
    .then((weather) => {
        domController.createWeather(weather)
    })
    .catch(err => {
        console.error(err)
        if (err.message === "NO_CITY"){
            domController.cityError();
        }
    })
}

weather();