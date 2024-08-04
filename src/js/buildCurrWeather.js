import { convertTime } from "./convTime";
import { format } from "date-fns";
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}   
export function buildCurrWeather(data){
    const currWeatherWrap = document.createElement('div');
    currWeatherWrap.classList.add('current-weather-wrapper');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    
    const title = document.createElement('h2');
    title.textContent = 'Current Weather';

    const time = document.createElement('p');
    time.textContent = "as of " + convertTime(data.currentConditions.datetime);

    titleContainer.appendChild(title);
    titleContainer.appendChild(time);

    const currWeatherBody = document.createElement('div');
    currWeatherBody.classList.add('curr-weather-body');

    const addressBody = document.createElement('div');
    addressBody.classList.add('address')

    const resolvedAddress = document.createElement('div')
    resolvedAddress.classList.add('resolved-address')
    resolvedAddress.textContent = data.address

    const day = document.createElement('div');
    day.classList.add('day-today');
    // console.log(data.days[0].datetime);
    day.textContent = format(data.days[0].datetime, 'EEEE');

    addressBody.appendChild(resolvedAddress)
    addressBody.appendChild(day);

    const currWeatherDetails = document.createElement('div');
    currWeatherDetails.classList.add('curr-weather-details');

    const img = document.createElement('img')
    let icon = data.currentConditions.icon;
    const images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));
    img.src = images[`${icon}.png`]

    const tempContainer = document.createElement('div');
    tempContainer.classList.add('temp-container');
    
    const temp = document.createElement('div');
    temp.classList.add('temp1');
    temp.textContent = data.currentConditions.temp + "°C"

    const feelslike = document.createElement('div');
    feelslike.classList.add('feels-like');
    feelslike.textContent = "Feels like " + data.currentConditions.feelslike + "°C";

    tempContainer.appendChild(temp);
    tempContainer.appendChild(feelslike);

    const condition = document.createElement('span');
    condition.classList.add('condition');
    condition.textContent = data.currentConditions.conditions;

    currWeatherDetails.appendChild(tempContainer);
    currWeatherDetails.appendChild(img);
    currWeatherDetails.appendChild(condition);

    currWeatherBody.appendChild(addressBody);
    currWeatherBody.appendChild(currWeatherDetails);
    

    currWeatherWrap.appendChild(titleContainer);
    currWeatherWrap.appendChild(currWeatherBody);

    return currWeatherWrap;
}