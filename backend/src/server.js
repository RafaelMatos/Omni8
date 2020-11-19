const express = require('express')
const mongoose = require('mongoose') //Importante ser antes das rotas,pq? 
const routes = require('./routes')
const cors = require('cors')


const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) =>{
    console.log('Nova conexão', socket.id)
    socket.on('hello', message => {
        console.log(message)
    })
})

mongoose.connect('mongodb+srv://teste:teste@cluster0.mp4en.mongodb.net/week8?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    
})



app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)