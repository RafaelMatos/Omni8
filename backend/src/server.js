const express = require('express')
const mongoose = require('mongoose') //Importante ser antes das rotas,pq? 
const routes = require('./routes')
const cors = require('cors')

mongoose.connect('mongodb+srv://teste:teste@cluster0.mp4en.mongodb.net/week8?retryWrites=true&w=majority',{
    useNewUrlParser : true,
     useUnifiedTopology: true ,
})

const server = express()
server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)