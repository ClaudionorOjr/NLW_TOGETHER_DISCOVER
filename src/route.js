const express = require('express')
const questionController =  require('./controllers/QuestionController')
const roomController = require('./controllers/RoomController')

const route = express.Router()

// Criação das rotas
route.get('/', (request, response) => {
  response.render("index", {page: 'enter-room'})
})

route.get('/create-pass', (request, response) => {
  response.render("index", {page: 'create-pass'})
})

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enterroom', roomController.enter)


route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index)
// Código para exportar o arquivo
module.exports = route