import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();
const app = document.querySelector("#app");
const header = document.createElement("header");
const dayContainer = document.createElement("section");
dayContainer.classList.add("day-section");
const forecastContainer = document.createElement("section");
forecastContainer.classList.add("forecast-section")
const footer = document.createElement("footer");
const footerName = document.createElement("p");
footerName.textContent = "Carl Madsen 2022";
footer.appendChild(footerName);
app.append(header, dayContainer, forecastContainer, footer)

// Creates the main weather block
function createMainWeather(weather) {
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("main-block");
    let current = weather.weatherData.current;
    // Create the weather elements from arguments and store them in an object for iterating appends    
    const mainElements = {
        status: createWeatherElement("main", "description", `${current.weather.description}.`),
        location: createWeatherElement("main", "location", `${weather.geoData.name}, ${weather.geoData.country}`),
        date: createWeatherElement("main", "date", `${new Date().toLocaleDateString("en-us", { weekday: 'long', month: 'short', day: 'numeric' })} / ${new Date().toLocaleTimeString("en-us", { timeStyle: "short" })}`),
        icon: createWeatherElement("main", "icon", `http://openweathermap.org/img/wn/${current.weather.icon}@4x.png`),
        temp: createWeatherElement("main", "temp", Math.round(current.currentTemp)),
        units: createWeatherElement("main", "units", `${current.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        feelsLike: createWeatherElement("main", "feels-like", `FEELS LIKE: ${Math.round(current.feelsLike)}${current.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        humidity: createWeatherElement("main", "humidity", `HUMIDITY: ${current.humidity}%`),
        wind: createWeatherElement("main", "wind", `WIND: ${Math.round(current.wind.speed)}m/s`)
        // optional: chance of rain
    }
    for (let element in mainElements) {
        mainBlock.appendChild(mainElements[element]);
    }
    const inputsBlock = document.createElement("div");
    inputsBlock.classList.add("main-inputs");
    inputsBlock.appendChild(createCityInput());
    inputsBlock.appendChild(createUnitsToggle());
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-container";
    mainBlock.appendChild(inputsBlock);
    mainBlock.appendChild(errorContainer);
    return [mainBlock, mainElements];
}

// This slider code made possible thanks to KellyEx: https://codepen.io/kellyex/pen/KKwwdYg
function createForecastScroller() {
    const slider = document.createElement("div");
    slider.classList.add("forecast-scroller");
    let isDown = false;
    let startX;
    let scrollLeft;
    const start = (event) => {
        isDown = true;
        slider.classList.add("forecast-scroller-active");
        startX = event.pageX || event.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
    const end = () => {
        isDown = false;
        slider.classList.remove("forecast-scroller-active");
    }
    const move = (event) => {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX || event.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
    }
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
    return slider;
}

// Creates the forecasted weather block (slider)
function createForecastWeather(forecast) {
    const forecastScroller = createForecastScroller();
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");
    let forecastArray = [];
        for (let day of forecast) {
        const forecastBlock = document.createElement("div");
        forecastBlock.classList.add("forecast-block");
        const forecastElements = {
            day: createWeatherElement("forecast", "day", day.date.toLocaleDateString("en-us", { weekday: 'short' })),
            icon: createWeatherElement("forecast", "icon", `http://openweathermap.org/img/wn/${day.weather.icon}@4x.png`),
            maxTemp: createWeatherElement("forecast", "max-temp", `${Math.round(day.maxTemp)}°`),
            minTemp: createWeatherElement("forecast", "min-temp", `${Math.round(day.minTemp)}°`),
            // units: createWeatherElement("forecast", "units", `${day.units === "CHANGE THIS HERE" ? "C" : "C"}`),
            // optional: chance of rain
        }
        forecastArray.push(forecastElements);
        for (let element in forecastElements) {
            forecastBlock.appendChild(forecastElements[element]);
        }
        forecastContainer.appendChild(forecastBlock);
    }
    forecastScroller.appendChild(forecastContainer);
    return [forecastScroller, forecastArray];
}

function createCityInput() {
    const form = document.createElement("form");
    form.id = "form-city";
    const cityInput = document.createElement("input");
    cityInput.type = "text";
    cityInput.placeholder = "eg. London, GB";
    const cityButton = document.createElement("button");
    cityButton.type = "submit";
    const cityIcon = document.createElement("i");
    cityIcon.classList.add("fa-solid", "fa-magnifying-glass");
    cityButton.appendChild(cityIcon);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let city = parseCityInput(cityInput.value);
        eventEmitter.emit("weather-city", city);
        return false;
    });
    form.appendChild(cityInput);
    form.appendChild(cityButton);
    return form;
}

// Removes whitespace from the city input for entry into API
function parseCityInput(city) {
    return city.replace(/\s/g, "").toLowerCase();
}

function createUnitsToggle() {
    const units = document.createElement("div");
    units.classList.add("units-toggle");
    const metric = document.createElement("button");
    metric.id = "toggle-metric";
    metric.textContent = "C";
    const divider = document.createElement("span");
    divider.textContent = "/";
    const imperial = document.createElement("button");
    imperial.id = "toggle-imperial";
    imperial.textContent = "F";
    metric.addEventListener("click", () => {
        eventEmitter.emit("set-units", "metric");
    });
    imperial.addEventListener("click", () => {
        eventEmitter.emit("set-units", "imperial");
    })
    units.append(metric, divider, imperial);
    return units;
}

// Creates a weather element based on where it is used (main or forecast), its type and content
// Sets class to be a standadised format for easier CSSing of the grid
function createWeatherElement(use, type, content) {
    if (type === "icon") {
        const block = document.createElement("div");
        block.classList.add(`${use}-${type}`);
        const image = document.createElement("img");
        image.src = content;
        block.appendChild(image);
        return block;
    }
    const block = document.createElement("p");
    block.classList.add(`${use}-${type}`);
    block.textContent = content;
    return block;
}

function removeErrors() {
    const errorContainer = document.querySelector("#error-container");
    errorContainer.textContent = "";
}

function cityError() {
    const errorContainer = document.querySelector("#error-container");
    errorContainer.textContent = "City could not be found.";
}

function changeUnits(weather, elements, units){
    let currentElements = elements[0];
    let currentWeather = weather[0];
    let forecastElements = elements[1];
    let forecastWeather = weather[1];
    function updateNumber(number, wind){
        if (units === "imperial"){
            if (wind === true){
                return Math.round(number);
            } else {
                return Math.round((number * 9 / 5) + 32);
            }
        }
            else return Math.round(number);
    }
    currentElements.temp.textContent = updateNumber(currentWeather.currentTemp);
    currentElements.feelsLike.textContent = `FEELS LIKE: ${updateNumber(currentWeather.feelsLike)}${units === "metric" ? "C" : "F"}`;
    currentElements.wind.textContent = `WIND: ${updateNumber(currentWeather.wind.speed)}${units === "metric" ? "m/s" : "mph"}`;
    currentElements.units.textContent = `${units === "metric" ? "C" : "F"}`;
    for (let i = 0; i < forecastElements.length; i++){
        forecastElements[i].maxTemp.textContent = `${updateNumber(forecastWeather[i].maxTemp)}°`;
        forecastElements[i].minTemp.textContent = `${updateNumber(forecastWeather[i].minTemp)}°`;
    }
    const metricELement = document.getElementById("toggle-metric");
    const imperialELement = document.getElementById("toggle-imperial");
    if (units === "metric"){
        metricELement.classList.add("units-toggle-active");
        imperialELement.classList.remove("units-toggle-active");
    } else {
        metricELement.classList.remove("units-toggle-active");
        imperialELement.classList.add("units-toggle-active");
    }
}

function createWeather(weather, units) {
    while (dayContainer.firstChild) {
        dayContainer.removeChild(dayContainer.firstChild)
    }
    while (forecastContainer.firstChild) {
        forecastContainer.removeChild(forecastContainer.firstChild)
    }
    let weatherItems = createMainWeather(weather);
    let forecastItems = createForecastWeather(weather.weatherData.daily);
    dayContainer.appendChild(weatherItems[0]);
    forecastContainer.appendChild(forecastItems[0]);
    removeErrors();
    eventEmitter.on("change-units", newUnits => {
        changeUnits([weather.weatherData.current, weather.weatherData.daily], [weatherItems[1], forecastItems[1]], newUnits)
    })
    changeUnits([weather.weatherData.current, weather.weatherData.daily], [weatherItems[1], forecastItems[1]], units)
    
}

export default {
    createWeather,
    eventEmitter,
    cityError
}