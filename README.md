# The Weather
A simple weather app, created with CSS & JavaScript, utilising webpack.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).

Created by Carl Madsen, 2022.

**[Live page!](https://elsaepo.github.io/odin-weather-app/)**

## Functionality

* **Weather** - Shows the current weather and weekly forecast based on a city input, in celcius or fahrenheit based on user's choice.

## Contributions

* [Google Fonts](https://fonts.google.com/)
* [Font Awesome](https://fontawesome.com/) is my go-to icon library for small apps like these. Really easy and fast to insert common icons into websites.
* [OpenWeatherMap](https://openweathermap.org/) was the API used to fetch the required geolocation and weather data for the user.

## Learning outcomes & challenges

* **Asynchronous code** is the foundation of this project. Having just done extensive study on Promises, the fetch API and async/await functions, I had a good understanding of how to complete the task coming in - but still had a lot to learn during the practical implementation of the concepts.
* Implementing **a third-party API** was very interesting, and I refactored my code to use a different API (OpenWeatherMap OneCall 2.5) to reduce the amount of API calls before all the necessary data was received - this was the biggest bottleneck in my page load, so reducing it was of major importance.
* I had to do a lot of **JSON parsing** to format the received data how I'd like - and to be able to reuse functions that have different inputs (e.g., the current weather data was received with a slightly different structure to the current weather data).
* Having already built a footer that contained my name, github link and a light mode/dark mode toggle, I was able to easily **re-use my code** and copy it over with next to no tweaking.

## Future Development

* Refactoring code - specifically, how the app changes the units between celcius and fahrenheit. At the moment it is fast, but I think it can be cleaned up significantly and made more resilient.