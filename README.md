# NLW TOGETHER
6ª edição da NLW
## Rocket.Q
Projeto desenvolvido nessa edição na trilha Discover.

### Instalação de componentes
- node: `npm init -y ` [-y é a flag para criar um projeto padrão]
- express: `npm install express`
- ejs: `npm install ejs`
- nodemon: `npm install nodemon -D` [-D é a flag para dependência de desenvolvimento]
- sqlite: `npm install sqlite`
- sqlite3: `npm instal sqlite3`

### Configuração no package.json
- `"main": "src/server.js"` [Deve ser passado o caminho do arquivo main]
- `"start": "nodemons ."` [Comando de atalho para rodar o projeto / estou utilizando o nodemon para rodar o projeto / o . (ponto) se refere ao main, pode ser escrito também como `node main`]
- `"init-db": " node src/db/init.js "` [Atalho para criar o banco de dados]