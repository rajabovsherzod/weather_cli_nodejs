import chalk from "chalk"
import dedent from "dedent-js"
const printError = err => {
    console.log(chalk.bgRed("ERROR") + " " + err)
}

const printSuccess = message => {
    console.log(chalk.bgGreen("SUCCESS") + " " + message)
}

const printHelp = () => {
    console.log(dedent`
    ${chalk.bold.bgCyan("Command Line Interface")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token
    `)
}

export {printError, printSuccess, printHelp}