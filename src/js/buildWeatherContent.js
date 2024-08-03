import { buildCurrWeather } from "./buildCurrWeather";
import { buildDays } from "./buildDays";
import { buildHours } from "./buildHours";

export function buildWeatherContent(data){
    const content = document.querySelector('.weather-content');

    

    content.appendChild(buildCurrWeather(data));
    content.appendChild(buildDays(data.days));
    content.appendChild(buildHours(data.days[0].hours));
}

