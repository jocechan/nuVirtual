// This is going to be the script for the client side
const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('Hello! What is your name?')
appendMsg('')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMsg(`${data.name}: ${data.message}`)
})

// handling connecting users
socket.on('user-connected', name => {
    appendMsg(`${name} just joined you!`)
})

// handling disconnects
socket.on('user-disconnected', name => {
    appendMsg(`${name} has just left the chat`)
})

// if we didn't do this, we'd lose all the chat messages
// and we don't want that.
messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    // emit sends info from the client to the server
    appendMsg(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMsg(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}

const msgContainer = document.querySelector('#message-container');
msgContainer.scrollTop = msgContainer.scrollHeight - msgContainer.clientHeight;
