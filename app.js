let path = require('path')
let express = require('express')
let app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static('./public'))

io.on('connection', (socket) => {   
  socket.on('chat', (user, msg) => {
    //console.log(user + 'say:' + msg + '!')
    io.sockets.emit('chat',user+'：' + msg)
  })
})

http.listen(3000, function () {  //监听3000端口：http://127.0.0.1：3000 
  console.log('listening on *:3000')
})
