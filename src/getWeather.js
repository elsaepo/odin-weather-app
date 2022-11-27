const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';

// Checks the response of the API, and throws an error if the response is not considered good
function checkResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response;
    }
}

// Takes a valid city input and fetches geographical data from API, to pass into next API
// Returns the first result in the case of multiple valid cities
// If there are no valid cities, throws an error
async function getGeocodeData(city) {
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
            { mode: "cors" })
        checkResponse(response);
        let geoData = await response.json();
        if (!geoData[0]) {
            throw Error("NO_CITY");
        } else {
            return geoData[0];
        }
    }
    catch (err) {
        throw err;
    }
}

// Fetches current weather data from geographical coordinates passed into API
async function getcurrentWeather(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        { mode: "cors" });
    checkResponse(response);
    // Converts to valid JSON format we can use
    let currentWeather = await response.json();
    return currentWeather;
}

// Fetches 5 day forecast from geographical coordinates passed into API
// Returns an object that contains a list of 40 3hr time slots from the time the forecast was fetched
async function getForecast(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        { mode: "cors" });
    checkResponse(response);
    // Converts to valid JSON format we can use
    let forecastWeather = await response.json();
    return forecastWeather;
}

// Main function we will be calling - gets geo data, then gets current weather and forecast
// Returns an object that contains all 3 data blocks as objects
async function getWeather(location, units) {
    let geoData = getGeocodeData(location);
    let currentWeather = geoData.then(loc => {
        return getcurrentWeather(loc, units);
    })
    let forecastWeather = geoData.then(loc => {
        return getForecast(loc, units);
    })
    return Promise.all([geoData, currentWeather, forecastWeather])
        .then(([geoData, currentWeather, forecastWeather]) => {
            return { geoData, currentWeather, forecastWeather }
        })
        .catch(err => {
            console.error(err);
            throw Error(err);
        })
}

export default getWeather;