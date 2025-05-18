import https from 'https';
import { TOKEN_DICTIONARY } from './storage.service.js';

const getWeather = async city => {
    const token = TOKEN_DICTIONARY.token
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    if(!token){
        throw new Error("API doesn't exist, use -t [API_KEY]")
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    url.searchParams.append('q', city)
    url.searchParams.append('appid', token)
    url.searchParams.append('lang', 'en')
    url.searchParams.append('units', 'metric')

    https.get(url, (res) => {
        let data = ''
        res.on('data', chunk => {
            data+=chunk
        })
        res.on('end', () => {
            console.log(res)
        })
    })
}

export {getWeather}