export async function getData(city){
    let response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=KLJQZAYYYQ2PT3EZCVTYFGXZV`)
    let data = await response.json();
    console.log(data)
    return data;
}