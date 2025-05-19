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

const printWeather = (response, icon) => {
    console.log(dedent`
        ${chalk.bgYellowBright('WEATHER')} City weather ${response?.name}
        ${icon}  ${response?.weather[0].description}
        Temprature: ${response.main.temp} (feels like) ${response.main.feels_like}
        Humidity: ${response.main.humidity}%
        Wind speed: ${response.wind.speed} m/s
    `)
}

export {printError, printSuccess, printHelp, printWeather}