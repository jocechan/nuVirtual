// This is going to be the script for the client side
//const socket = io('35.208.221.63:3000')
const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
var chat_transcript2 = []

const name = prompt('Hello! What is your name?')
appendMsg('')
socket.emit('new-user', name)

socket.on('chat-message', data => {
    appendMsg(`${data.name}: ${data.message}`)
    //chat_transcript2.push(`${data.name}: ${data.message}`)
})

// handling connecting users
socket.on('user-connected', name => {
    appendMsg(`${name} just joined you!`)
    chat_transcript2.push(new Date())
})

// handling disconnects
socket.on('user-disconnected', name => {
    appendMsg(`${name} has just left the chat`)
    console.log(chat_transcript2)
    localStorage.setItem("chat_transcript2", chat_transcript2)
})

// if we didn't do this, we'd lose all the chat messages
// and we don't want that.
messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    chat_transcript2.push(message)
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
