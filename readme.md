# genericapi

Esse projeto disponibiliza uma api genérica desenvolvida em Node.js, express e MongoDB.

## Começando

Para executar o projeto, será necessário instalar os seguintes programas:

* Node.js: [Node](https://nodejs.org/en/download/)
* Express(Framework para node): [Express](https://www.npmjs.com/package/express)
* MongoDB: [MongoDB Cloud](https://www.mongodb.com/cloud)

## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:


``` cd "diretorio de sua preferencia" ```
``` git clone https://github.com/yuriBrandaoS/gerenic-api```

Criar conta no [MongoDB Cloud](https://cloud.mongodb.com/) e gerar a conexão para preencher na variável DATABASE_CONNECTION_STRING do arquivo .env.


## Construção

Ao abrir a pasta do projeto rode o comando abaixo para instalar todas as dependências do package.json:

``` npm install ```

Para rodar em dev o seguinte código:

``` npm run dev ```

## Configuração

Para testar a API, recomendo a utilização do Postman, para fazer um GET e POST na model mentions.

* Faça um POST em mentions (localhost:3000/mentions)
	* Para inserir dados na API
* Faça um GET em mentions (localhost:3000/mentions) 
	* Para listar dados
