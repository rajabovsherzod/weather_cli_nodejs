import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp, printWeather } from './services/log.service.js';
import {TOKEN_DICTIONARY, saveKeyValue, getKeyValue} from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

const saveToken = async token => {
    if(!token.length){
        printError("Token doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token was saved')
    } catch (error) {
        printError('Error saving token:', error.message)
    }
}


const saveCity = async city => {
    if(!city.length){
        printError("City doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City was saved')
    } catch (error) {
        printError('Error saving city:', error.message)
    }
}

const getForcast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const response = await getWeather(city);
        console.log('------------------------------------------')
        printWeather(response, getIcon(response.weather[0].icon) );
        console.log('------------------------------------------')
    } catch (error) {
        if(error?.response?.status == 404){
            printError('City not found')
        }else if(error?.response?.status == 401){
            printError('Token is invalid')
        }else{
            printError('Error fetching weather:', error.message)
        }
    }
}

const startCLI = () => {
    const args = getArgs(process.argv);
    if(args.h){
      return  printHelp()
    }
    if(args.s){
       return saveCity(args.s)
    }
    if(args.t){
      return saveToken(args.t)
    }

    getForcast();
    
}

startCLI();

