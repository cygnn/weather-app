export function convertTime(time){
    time = time.split(':'); // convert to array
    
    // fetch
    let hours = Number(time[0]);
    let minutes = Number(time[1]);
    let seconds = Number(time[2]);
    
    // calculate
    let timeValue;
    
    if (hours > 0 && hours <= 12) {
      timeValue= "" + hours;
    } else if (hours > 12) {
      timeValue= "" + (hours - 12);
    } else if (hours == 0) {
      timeValue= "12";
    }
     
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

    return timeValue;
}   