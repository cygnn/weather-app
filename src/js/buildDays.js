import { format } from "date-fns";
import { isToday } from "date-fns";
import { importAll } from "./importAll";

export function buildDays(data){
    const days = 7;
    
    const dayWrapper = document.createElement('div');
    dayWrapper.classList.add('day-wrapper');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    
    const h2 = document.createElement('h2');
    h2.textContent = '7 day Weather Forecast'

    titleContainer.appendChild(h2);
    dayWrapper.appendChild(titleContainer);
    for(let i = 0; i <= days; i++){
        const images = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));
        const dayCard = document.createElement('div');
        dayCard.classList.add('day-card');

        const dateContent = document.createElement('div');
        dateContent.classList.add('date-content');

        const dayOfWeek = document.createElement('p')
        dayOfWeek.classList.add('day')
        if(isToday(data[i].datetime)){
            dayOfWeek.textContent = 'Today'
        }
        else{
            dayOfWeek.textContent = format(data[i].datetime, "EEEE")
        }

        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = format(data[i].datetime, "M/d")

        dateContent.appendChild(dayOfWeek);
        dateContent.appendChild(date);

        const tempWrapper = document.createElement('div');
        tempWrapper.classList.add('temp');

        const img = document.createElement('img');
        img.src = images[`${data[i].icon}.png`]

        const tempHi = document.createElement('span');
        tempHi.classList.add('temp-hi');
        tempHi.textContent = data[i].tempmax + "°";

        const tempLow = document.createElement('span');
        tempLow.classList.add('temp-low');
        tempLow.textContent = data[i].tempmin + "°";

        tempWrapper.appendChild(img);
        tempWrapper.appendChild(tempHi);
        tempWrapper.appendChild(tempLow);

        const conditionWrapper = document.createElement('div');
        conditionWrapper.classList.add('conditions');

        const condition = document.createElement('p');
        condition.classList.add('condition-phrase')
        condition.textContent = data[i].conditions

        const desc = document.createElement('p');
        desc.classList.add('description')
        desc.textContent = data[i].description;

        conditionWrapper.appendChild(condition);
        conditionWrapper.appendChild(desc);

        const rainProb = document.createElement('div');
        rainProb.classList.add('precip-probability');

        const rainDrop = document.createElement('img');
        rainDrop.src = images[`raindrop.png`]

        const percent = document.createElement('span');
        percent.textContent = Math.round(data[i].precipprob) + "%"

        rainProb.appendChild(rainDrop);
        rainProb.appendChild(percent);


        dayCard.appendChild(dateContent);
        dayCard.appendChild(tempWrapper);
        dayCard.appendChild(conditionWrapper);
        dayCard.appendChild(rainProb);


        dayWrapper.appendChild(dayCard);
    }
    return dayWrapper;
}