const app = document.querySelector("#app");
const header = document.createElement("header");
const dayContainer = document.createElement("section");
dayContainer.classList.add("day-container");
const forecastContainer = document.createElement("section");
forecastContainer.classList.add("forecast-container")
const footer = document.createElement("footer");
app.append(header, dayContainer, forecastContainer, footer)



function createMainWeather(weather){
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("main-block");
    const status = document.createElement("h3");
    status.classList.add("main-status")
    status.textContent = `${weather.currentWeather.weather.description}.`;
    const location = document.createElement("h5");
    location.classList.add("main-location");
    location.textContent = `${weather.geoData.name}, ${weather.geoData.country}`;
    const date = document.createElement("h5");
    date.classList.add("main-date");
    date.textContent = new Date().toLocaleDateString("en-us", {weekday: 'long', month: 'short', day: 'numeric'});
    const icon = document.createElement("img");
    icon.classList.add("main-icon");
    icon.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png")
    const temp = document.createElement("h2");
    temp.classList.add("main-temp");
    temp.textContent = weather.currentWeather.currentTemp;
    const units = document.createElement("div");
    units.classList.add("main-units");
    units.textContent = `${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`
    
    const feelsLike = document.createElement("p");
    feelsLike.classList.add("main-feels-like");
    feelsLike.textContent = `FEELS LIKE: ${weather.currentWeather.feelsLike}${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`;

    const humidity = document.createElement("p");
    humidity.classList.add("main-humidity");
    humidity.textContent = `HUMIDITY: ${weather.currentWeather.humidity}%`;

    const wind = document.createElement("p");
    wind.classList.add("main-wind");
    wind.textContent = `WIND: ${weather.currentWeather.wind.speed}km/h`;
    
    //degrees and units
    //feels like
    //humidity
    //wind
    // optional: chance of rain
    
    mainBlock.appendChild(status);
    mainBlock.appendChild(location);
    mainBlock.appendChild(date);
    mainBlock.appendChild(icon);
    mainBlock.appendChild(temp);
    mainBlock.appendChild(units);
    mainBlock.appendChild(feelsLike);
    mainBlock.appendChild(humidity);
    mainBlock.appendChild(wind);
    return mainBlock;
}

function createWeatherBlock(weather){
    const weatherBlock = document.createElement("div");
    weatherBlock.classList.add("weather-block");
    const iconBlock = document.createElement("img");
    iconBlock.classList.add("icon");
    iconBlock.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png")
    const tempBlock = document.createElement("h2");
    tempBlock.classList.add("temp")
    tempBlock.textContent = weather.currentTemp;



    weatherBlock.append(iconBlock, tempBlock)

    return weatherBlock;
}

function createWeather(weather){
    dayContainer.appendChild(createMainWeather(weather))
}

export default {
    createWeather
}