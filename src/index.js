import './style.css';

const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';
let units = "metric";

async function getGeocode(city){
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
    { mode: "cors" });
    let geoData = await response.json();
    console.log(geoData);
    return geoData[0];
}

async function getWeather(location){
    let country = location.country;
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
    { mode: "cors" });
    let weatherData = await response.json();
    console.log(weatherData);
}

getGeocode("Melbourne")
.then(response => {
    getWeather(response);
})
.catch(err => {
    console.error(err);
});