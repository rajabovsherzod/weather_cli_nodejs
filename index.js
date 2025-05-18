import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import {TOKEN_DICTIONARY, saveKeyValue} from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

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

const startCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.t){
        saveToken(args.t)
    }
    getWeather('London');
    
}

startCLI();

