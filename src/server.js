// Importando os módulos
const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

// Utilizar dos arquivos da pasta public
server.use(express.static("public"))

// Faz a busca da pasta views
server.set('views', path.join(__dirname,'views'))

server.use(express.urlencoded({extended:true}))

server.use(route)

server.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000 🚀')
})