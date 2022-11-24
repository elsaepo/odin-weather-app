const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';

function checkResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response;
    }
}

async function getGeocodeData(city) {
    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
            { mode: "cors" })
        checkResponse(response);
        let geoData = await response.json();
        if (!geoData[0]) {
            throw Error("Could not find city");
        } else {
            return geoData[0];
        }
    }
    catch (err) {
        throw err;
    }
}

async function getWeatherData(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        { mode: "cors" });
        checkResponse(response);
    let weatherData = await response.json();
    return weatherData;
}

async function getWeather(location, units) {
    let geoData = getGeocodeData(location);
    let weatherData = geoData.then(loc => {
        return getWeatherData(loc, units);
    })
    Promise.all([geoData, weatherData])
        .then(([geoData, weatherData]) => {
            console.log(`got geo data:`)
            console.log(geoData)
            console.log(`got weather data:`)
            console.log(weatherData)
        })
        .catch(err => {
            console.error(err);
        })
}

export default getWeather;