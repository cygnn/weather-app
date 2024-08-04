export async function getData(city){
    try{
        let response = await fetch (`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=KLJQZAYYYQ2PT3EZCVTYFGXZV`)
        let data = await response.json();
        return data;
   }
   catch(error){
        return "failed";
    }
    
}