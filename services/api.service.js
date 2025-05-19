import axios from 'axios';
import https from 'https';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

function getIcon(code) {
    const icons = {
      "01d": "☀️",      // Clear sky (day)
      "01n": "🌙",      // Clear sky (night)
      "02d": "🌤️",     // Few clouds (day)
      "02n": "🌤️",     // Few clouds (night)
      "03d": "☁️",      // Scattered clouds
      "03n": "☁️",
      "04d": "🌥️",     // Broken/overcast clouds
      "04n": "🌥️",
      "09d": "🌧️",     // Shower rain
      "09n": "🌧️",
      "10d": "🌦️",     // Rain
      "10n": "🌧️",
      "11d": "⛈️",     // Thunderstorm
      "11n": "⛈️",
      "13d": "❄️",      // Snow
      "13n": "❄️",
      "50d": "🌫️",     // Mist
      "50n": "🌫️"
    };
  
    return icons[code] || "❓";
  }
  
  

const getWeather = async city => {
    const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token))
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    if(!token){
        throw new Error("API doesn't exist, use -t [API_KEY]")
    }

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


export {getWeather, getIcon}