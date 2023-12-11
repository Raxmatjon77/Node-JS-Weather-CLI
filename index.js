import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
// const chalk=require("chalk");
import {printError,printSuccess,printHelp} from "./services/log.service.js";
import { TOKEN_DICTIONARY, savekeyValue } from "./services/storage.service.js";

const saveToken=async(token)=>{ 
    if (!token.length){
        printError("Token doesn't exist")
    }
    else {
    try{
    await savekeyValue(TOKEN_DICTIONARY.token, token);
  printSuccess("token was saved successfully")}
    catch(e){
        await printError(e);
}}
}
const startCli=()=>{
  
    const args=getArgs(process.argv);
    console.log(args);
    // console.log(args);
    if(args.h){
        printHelp()
    }
    if(args.t){
       return saveToken(args.t);
    }
    if(args.s){
        
    }
  
    // console.log(process.argv);
    getWeather('london')
}
startCli()