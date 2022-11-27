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
    status.textContent = weather.currentWeather.weather.description;
    const location = document.createElement("h5");
    location.textContent = weather.geoData.name;
    const date = document.createElement("h5");
    date.textContent = new Date();
    //icon
    //temp
    //degrees and units
    //feels like
    //humidity
    //wind
    // optional: chance of rain
    
    mainBlock.appendChild(status);
    mainBlock.appendChild(location);
    mainBlock.appendChild(date);

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