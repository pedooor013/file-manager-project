//Bibliotecas padrão do node.js
//Commom JS 
const fs = require('fs'); //fs = file system
const path = require('path'); // path = pasta 

function createDirectory(dirPath){
    return new Promise((resolve, reject) =>{
        fs.mkdir(dirPath, {recursive: true}, (err)=>{
            if(err){
                reject;
            }else{
                resolve(`Directory '${dirPath} created successfully'`);
            }
        })
    })
}

function createFile(filePath, content = ''){
    return  new Promise((resolve, reject) =>{
        fs.writeFile(filePath, content, 'utf8', (err)=>{
            if(err){
                reject(err);
            }else{
                resolve(`Path '${filePath}' created successfully`);
            }
        });
    });
}

//Serve para exportar para outros arquivos
module.exports = (createDirectory, createFile);

