import { convertTime } from "./convTime";
import { importAll } from "./importAll";

export function buildHours(hours){
    const hourWrapper = document.createElement('div');
    hourWrapper.classList.add('hour-wrapper');


    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    
    const h2 = document.createElement('h2')
    h2.textContent='Hourly Forecast';

    titleContainer.appendChild(h2);

    hourWrapper.appendChild(titleContainer);
    hours.forEach(hour => {
        const hourCard = document.createElement('div');
        hourCard.classList.add('hour-card');

        const time = document.createElement('div');
        time.classList.add('time')
        time.textContent = convertTime(hour.datetime);

        const img = document.createElement('img')
        const images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/))
        const icon = hour.icon;
        img.src = images[`${icon}.png`]

        const temp = document.createElement('div');
        temp.classList.add('temp2');
        temp.textContent = Math.round(hour.temp) + "°";
        
        hourCard.appendChild(time);
        hourCard.appendChild(img);
        hourCard.appendChild(temp);

        hourWrapper.appendChild(hourCard);
    });
    return hourWrapper
}