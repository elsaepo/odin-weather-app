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

function createMainWeather(weather) {
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("main-block");

    // Create the weather elements from arguments and store them in an object for iterating appends    
    const mainElements = {
        status: createWeatherElement("main", "description", `${weather.currentWeather.weather.description}.`),
        location: createWeatherElement("main", "location", `${weather.geoData.name}, ${weather.geoData.country}`),
        date: createWeatherElement("main", "date", new Date().toLocaleDateString("en-us", { weekday: 'long', month: 'short', day: 'numeric' })),
        icon: createWeatherElement("main", "icon", `http://openweathermap.org/img/wn/${weather.currentWeather.weather.icon}@4x.png`),
        temp: createWeatherElement("main", "temp", Math.round(weather.currentWeather.currentTemp)),
        units: createWeatherElement("main", "units", `${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        feelsLike: createWeatherElement("main", "feels-like", `FEELS LIKE: ${Math.round(weather.currentWeather.feelsLike)}${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        humidity: createWeatherElement("main", "humidity", `HUMIDITY: ${weather.currentWeather.humidity}%`),
        wind: createWeatherElement("main", "wind", `WIND: ${Math.round(weather.currentWeather.wind.speed)}km/h`)
        // optional: chance of rain
    }
    for (let element in mainElements) {
        mainBlock.appendChild(mainElements[element]);
    }
    return mainBlock;
}

function createForecastWeather(weather) {
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");
    for (let day of weather.forecastWeather) {
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
        for (let element in forecastElements){
            forecastBlock.appendChild(forecastElements[element]);
        }
        forecastContainer.appendChild(forecastBlock);
    }
    return forecastContainer;
}

// Creates a weather element based on where it is used (main or forecast), it's type and content
// Sets class to be a standadised format for easier CSSing of the grid
function createWeatherElement(use, type, content) {
    if (type === "icon") {
        const block = document.createElement("img");
        block.classList.add(`${use}-${type}`);
        block.src = content;
        return block;
    }
    const block = document.createElement("p")
    block.classList.add(`${use}-${type}`);
    block.textContent = content;
    return block;
}

function createWeather(weather) {
    dayContainer.appendChild(createMainWeather(weather))
    forecastContainer.appendChild(createForecastWeather(weather))
}

export default {
    createWeather
}