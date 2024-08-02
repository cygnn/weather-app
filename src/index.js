const { buildWeatherContent } = require("./js/buildWeatherContent");
const { getData } = require("./js/getData");
const { WeatherDetails } = require("./js/weatherDetails");

const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', async() =>{
    let data = getData(search.value);
    
    data.then(function(response){
        const weather = new WeatherDetails(response.resolvedAddress, response.days, response.currentConditions)
        console.log(response.resolvedAddress)
        console.log(weather.days[0].description);
        buildWeatherContent(weather);
    });
})

