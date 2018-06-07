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

http.listen(3000, function () {
  console.log('listening on *:3000')
})
