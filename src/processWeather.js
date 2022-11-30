// Takes a weather object that contains the weather properties of that moment
// and converts it to a much more readable and reduced format
function parseData(data) {
    let tempObject = {
        date: new Date(data.dt * 1000),
        currentTemp: data.temp,
        feelsLike: data.feels_like,
        humidity: data.humidity,
        wind: {
            speed: data.wind_speed,
            deg: data.wind_deg
        },
        weather: {
            description: data.weather[0].description,
            type: data.weather[0].main,
            icon: data.weather[0].icon
        }
    }
    // If parsing a forecast weather object, use different gets for the properties
    if (typeof data.temp !== "number") {
        delete tempObject.currentTemp;
        tempObject.maxTemp = data.temp.max;
        tempObject.minTemp = data.temp.min;
        tempObject.feelsLike = data.feels_like.day;
    }
    return tempObject;
}

// Takes an array of weather objects that represents the forecasted weather
function convertForecast(data) {
    return data.map(day => parseData(day));
}

// Takes the raw weather input object and returns the parsed data for each property
function processWeather(weatherObject) {
    let weather = {
        current: parseData(weatherObject.current),
        daily: convertForecast(weatherObject.daily)
    }
    //
    // CHECK TO SEE IF THIS REQUIRES AN IF/ELSE STATEMENT AROUND MIDNIGHT
    // E.G., IF THE FIRST FORECAST OBJECT IN THE ARRAY IS -NOT- THE CURRENT DAY
    //
    // Add forecast maxTemp data to the currentWeather object
    weather.current.maxTemp = weather.daily[0].maxTemp;
    // Then chop out the first day so it doesn't appear in the forecast
    weather.daily.splice(0, 1);
    return weather;
}

export default processWeather;