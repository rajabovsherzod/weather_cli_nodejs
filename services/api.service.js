import axios from 'axios';
import https from 'https';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

const getWeather = async city => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    if(!token){
        throw new Error("API doesn't exist, use -t [API_KEY]")
    }
    console.log(token);

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric',
        }
    })

    return data
}


export {getWeather}