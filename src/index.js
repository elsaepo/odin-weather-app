import './style.css';
import processWeather from "./processWeather.js"
import getWeather from './getWeather.js';
import domController from "./domController.js";

let units = "metric";
let location = "Melbourne,Australia";

domController.eventEmitter.on("weather-city", (city) => {
    weather(city);
})

domController.eventEmitter.on("set-units", (u) => {
    if (u === units){
        return;
    }
    domController.eventEmitter.emit("change-units", u)
    units = u;

})

function weather(city){
    let weather = getWeather(city, "metric");
    weather
    .then(data => {
        data.weatherData = processWeather(data.weatherData);
        return data;
    })
    .then((weather) => {
        location = city;
        domController.createWeather(weather, units)
    })
    .catch(err => {
        console.error(err)
        if (err.message === "NO_CITY"){
            domController.cityError();
        }
    })
}

weather(location);