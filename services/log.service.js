import chalk from "chalk";
import dedent from "dedent-js";
const printError=(error)=>{
    console.log(chalk.bgRed("ERROR")+" "+error);
}
const printSuccess=(message)=>{
    console.log(chalk.bgGreen('Success')+" "+message);
}
const printHelp=()=>{
    console.log(dedent`${chalk.bgCyan('Help')}
            -s [CITY]  for install city
            -h [HELP] for help
            -t [API_KEY] for saving Token 
            type exit to return menu
    `)
};

export {printError, printSuccess,printHelp};