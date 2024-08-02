import { buildCurrWeather } from "./buildCurrWeather";
import { buildDays } from "./buildDays";

export function buildWeatherContent(data){
    const content = document.querySelector('.weather-content');

    

    content.appendChild(buildCurrWeather(data));
    content.appendChild(buildDays(data.days));
}

