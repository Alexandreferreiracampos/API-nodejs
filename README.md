Criar o aquivo packge
npm init

//instalar todas as dependencias
npm install

//gerenciar as requisições, rotas e url.
npm install express

//instalar o modulo para reiniciar o servidor sempre que houver uma modificação do codigo fonte.
npm install -d nodemon

//Executar o nodemon 
npm run dev App.js

//adiciona essa entrada "dev" em package.json
{
    "scripts": {
        "dev": "nodemon"
    }
}

//instal o MongoDB
npm install --save mongodb

//instalar o Mongoose, traduz os dados do banco de dados para objetos javascript para que possa ser utilizados por sua aplicação.
npm install --save mongoose

//instalar o Cors para permitir requisiçoes 