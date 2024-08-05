const { buildWeatherContent } = require("./js/buildWeatherContent");
const { getData } = require("./js/getData");
const { WeatherDetails } = require("./js/weatherDetails");
import { loading } from './js/loading';
import './styles.css'   

const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');
const loader = document.querySelector('.loader');
const content = document.querySelector('.content')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    searchData();
    form.reset();
})

searchBtn.addEventListener('click', searchData)

searchBtn.addEventListener('click', () => {
    loading("load");
    loader.classList.add('show')
    content.classList.add('hide')
})

async function searchData(){
    let data = getData(search.value);
    data.then(function(response){
        if(response === "failed"){
            loading(response);
            loader.classList.remove('show')
            loader.classList.add('hide')
        }
        else{
            const weather = new WeatherDetails(response.resolvedAddress, response.days, response.currentConditions)
            loading("");
            loader.classList.remove('show')
            loader.classList.add('hide');
            buildWeatherContent(weather);
            content.classList.remove('hide')
        }
    });
}