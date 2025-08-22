    const fileManager = require("./fileManager");
    const readLineSync = require("readline-sync");
    const path = require("path");
const { readFile, readFileSync } = require("fs");

async function main() {
    const baseDir = path.join(__dirname, "my_files");
    fileManager.createDirectory(baseDir);

    while (true) {
        console.log(`
                \nMenu:
                \n1. Criar arquivo
                \n2. Listar arquivos
                \n3. Ler arquivo
                \n4. Escrever arquivo
                \n5. Deletar arquivo
                \n6. Sair
            `);

        const choice = readLineSync.question("Escolha uma opção:");
        try{
        
        
        switch (choice) {
        case "1":
            const fileName = readLineSync.question("Digite o nome do arquivo: ");
            const fileContent = readLineSync.question(
            "Digite o conteudo do novo arquivo (Ou deixe em branco): "
            );

            //dirname é o nome do diretorio atual
            const createFilePath = path.join(baseDir, fileName);

            const fileMessage = await fileManager.createFile(
            createFilePath,
            fileContent
            );

            console.log(fileMessage);
            break;

        case "2":
            const files = await fileManager.listFiles(baseDir);
            console.log("Arquivos no dietorio ", files);
            break;            
        case "3":
            const readFileName = readLineSync.question("Digite o nome do arquivo desejado: ");
            const readFilePath = path.join(baseDir, readFileName);
            const content = await fileManager.readFile(readFilePath);
            
            console.log("Conteudo do arquivo: ", content);
            
            break;

        case "4":
            const writeFileName = readLineSync.question("Digite o nome do arquivo a ser escrito: ");
            const writeFilePath = path.join(baseDir, writeFileName);
            const newContent = readLineSync.question("Digite o conteudo a ser inserido no arquivo: ");
            await fileManager.writeFile(writeFilePath, newContent);

            console.log(`Arquivo ${writeFileName} foi escrito: ${newContent}`);

            break;

        case "5":
            const delFileName = readLineSync.question("Digite o nome do arquivo a ser deletado: ");
            const delFilePath = path.join(baseDir, delFileName);
            await fileManager.deleteFile(delFilePath);

            console.log(`O arquivo ${delFileName} foi deletado com sucesso!`);

            break;
        case "6":
            console.log("Saindo...");
            return;
            break;
        default:
            console.log("Opção inválida. Tente novamente!");
        }
        }catch(err){
            console.log(err)
        }
    }
    }

    main();
