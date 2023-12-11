import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';
import https from 'https';
import axios from 'axios';
const token = await getKeyValue(TOKEN_DICTIONARY.token);

const getWeather=async city =>{
    
if(!token){
    throw new Error("Api doesn't exist !, -t [API_KEY] for saving Token ")
}
const {data}=await axios.get("https://api.openweathermap.org/data/2.5/weather",{
    params:{
        q:city,
        appid:token,
        lang:'en',
        units:"metric"  

    }

}
)
return data;
}

export {getWeather}