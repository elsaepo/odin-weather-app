// Takes a weather object that contains the weather properties of that moment
// and converts it to a much more readable and reduced format
function parseData(data) {
    return {
        currentTemp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        wind: {
            speed: Math.round(data.wind.speed),
            deg: data.wind.deg
        },
        weather: {
            description: data.weather[0].description,
            type: data.weather[0].main,
            icon: data.weather[0].icon
        }
    }
}

// Takes an array of weather objects that represents the forecasted weather
// Returns an array of the weather object split up into days, where array[0] is the current day
function convertForecast(data) {
    // Convert utx timecode to user's local time and note day of the month
    data.map(day => {
        day.dt_txt = new Date(day.dt * 1000);
        day.day = day.dt_txt.getDate();
    })
    // Split up the weather array into seperate days
    // The first day may be shorter if there's <8 3hr time blocks remaining in that day's forecast
    let forecast = [];
    let currentDay = new Date().getDate();
    let currentDayRemaining = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i].day === currentDay){
            currentDayRemaining++;
        } else break;
    }
    forecast.push(data.splice(0, currentDayRemaining))
    // Once the current day's weather objects have been divided, divide the rest into 24hr chunks
    // Maximum of 5 day objects
    while (data.length) {
        forecast.push(data.splice(0, 8));
    }
    forecast = forecast.splice(0, 5)
    console.log(forecast)
    // Parse the data of each day at approximately midday to get normalised values
    // For the max temp data, take the maximum out of all the time blocks of that day
    let avForecast = forecast.map((day) => {
        let chunkToCalc = day.length < 5 ? 0 : 4;
        let parsedData = parseData(day[chunkToCalc]);
        parsedData.maxTemp = Math.round(Math.max(...day.map((time) => time.main.temp)));
        delete parsedData.currentTemp;
        delete parsedData.feelsLike;
        return parsedData;
    });
    return avForecast;
}

// Takes the raw weather input object and returns the parsed data for each property
function processWeather(weatherObject) {
    let weather =  {
        geoData: weatherObject.geoData,
        currentWeather: parseData(weatherObject.currentWeather),
        forecastWeather: convertForecast(weatherObject.forecastWeather.list)
    }
    // Add maxTemp data to the currentWeather object
    weather.currentWeather.maxTemp = weather.forecastWeather[0].maxTemp;
    return weather;
}

export default processWeather;