import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
const startCLI = () => {
    const args = getArgs(process.argv);
    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.t){

    }

    // resultprintHelp}
}

startCLI();


