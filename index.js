const fileManager = require('./fileManager');
const readLineSync = require('readline-sync');
const path = require('path');

function main(){
    while(true){

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

        const baseDir = path.join(__dirname,"my_files");

        switch(choice){
            case '1':

                const fileName = readLineSync.question('Digite o nome do arquivo: ');
                const fileContent = readLineSync.question('Digite o conteudo do novo arquivo (Ou deixe em branco): ');

                //dirname é o nome do diretorio atual
                const createFilePath = path.join(__dirname, fileName);

                const fileMessage = fileManager.createFile(createFilePath, fileContent);

                console.log(fileMessage);
                break;

            case '2':

            
                console.log('Arquivos do diretorio: ');
                break;

            case '3':
                console.log('Conteúdo do arquivo:');
                break;

            case '4':
                console.log('Arquivo escrito com sucesso!');
                break;

            case '5':
                console.log('Arquivo deletado com sucesso!');
                break;

            case '6':
                console.log('Saindo...');
                return;
                break;
            default:
                console.log('Opção inválida. Tente novamente!')

            }  
    }
}

main();