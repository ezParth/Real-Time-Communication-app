const express = require('express')
const app = express()
const http = require('http').Server(app);
const cors = require('cors')
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});


const PORT = 3000

app.use(cors());

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    })
})

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});