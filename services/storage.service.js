import os from 'os';
import path from 'path';
import fs from 'fs';
import { error } from 'console';
const filepath=path.join(os.homedir(),'wheather-data.json')

const TOKEN_DICTIONARY = {
  token:'token',
  city:'city',
};
let data={}
const savekeyValue= async (key,value)=>{
 

  if( await isExist(filepath)){
    const file =await fs.promises.readFile(filepath)
    data=JSON.parse(file)
  }
  data[key] = value
  await fs.promises.writeFile(filepath,JSON.stringify(data))
};
//
const getKeyValue = async key=>{
    if( await isExist(filepath)){
        const file =await fs.promises.readFile(filepath)
        data=JSON.parse(file)
        return data[key]
      }
      return undefined
}
const isExist=async path=>{
    try{
        await fs.promises.stat(path)
        return true;

    }
    catch (error){
        return false;
    }

}
export {savekeyValue,getKeyValue,TOKEN_DICTIONARY}