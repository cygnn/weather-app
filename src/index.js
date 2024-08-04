const { buildWeatherContent } = require("./js/buildWeatherContent");
const { getData } = require("./js/getData");
const { WeatherDetails } = require("./js/weatherDetails");
import { loading } from './js/loading';
import './styles.css'   

const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', async() =>{
    let data = getData(search.value);
    data.then(function(response){
        if(response === "failed"){
            loading(response);
        }
        else{
            const weather = new WeatherDetails(response.resolvedAddress, response.days, response.currentConditions)
            loading("");
            buildWeatherContent(weather);
        }
    });
})

searchBtn.addEventListener('click', () => {
    loading("load");
})