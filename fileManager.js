//Bibliotecas padrão do node.js
//Commom JS 
import fs from 'fs'; //fs = file system

function createDirectory(dirPath){
    return new Promise((resolve, reject) =>{
        fs.mkdir(dirPath, {recursive: true}, (err)=>{
            if(err){
                reject;
            }else{
                resolve(`Directory '${dirPath}' created successfully'`);
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

function listFiles(dirPath){
    return new Promise((resolve, reject) =>{
        fs.readdir(dirPath, (err, files) =>{
            if(err){
                reject(err);
            }else{
                resolve(files);
            }
        });
    });
}

function readFile(filePath){
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

function writeFile(filePath, content){
    return new Promise((resolve, reject) =>{
        fs.writeFile(filePath, content, 'utf8', (err) =>{
            if(err){
                reject(err);
            }else{
                resolve('File written succesfuly!');
            }
        });
    });
}

function deleteFile(filePath){
    return new Promise((resolve, reject) =>{
        fs.unlink(filePath, (err) =>{
            if(err){
                reject(err);
            }else{
                resolve('File deleted');
            }
        });
    });
}

//Serve para exportar para outros arquivos
export default {createDirectory, createFile, listFiles, readFile, writeFile, deleteFile};

