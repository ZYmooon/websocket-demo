let path = require('path')
let express = require('express')
let app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
let axios = require('axios')

app.use(express.static('./public'))

io.on('connection', (socket) => {
  socket.on('chat', (user, msg) => {
    // console.log(user + 'say:' + msg + '!')
    if (/小爱/.test(msg)) {
      axios.post('http://www.tuling123.com/openapi/api', {
        key: 'cc47f6a04d54406a9041435790943e7a',
        info: msg,
        userid: 276020
      }).then((res) => {
        console.log(res.data)

        io.sockets.emit('chat', '小爱：' + res.data.text)
      })
    }

    io.sockets.emit('chat',  user+'：' + msg)
  })
})

http.listen(3000, function () { // 监听3000端口：http://127.0.0.1：3000 
  console.log('listening on *:3000')
})
