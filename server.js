// The server is being run on port 3000. The socket.io makes it
// so that we can have real time chats.
const io = require('socket.io')(3000)
// you want the key of users to be the id of the socket.
const users = {}

io.on('connection', socket => {
    // console.log('new user!')
    // socket.emit('chat-message', 'hello world')
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        // console.log(message)
        // this line sends the message to anyone else on the same page
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})