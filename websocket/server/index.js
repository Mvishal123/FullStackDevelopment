const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');


const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server, {
    cors:{
        origin: "http://localhost:5173",
    }
});

app.get('/', (req, res) => { 
    res.send('Hello World!'); 
});

io.on('connection', (socket) => {
    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    });
});



server.listen(3000, () => {
    console.log('listening on port :3000');
});