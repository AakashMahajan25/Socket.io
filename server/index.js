const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        method: ['GET', 'POST'],
        credentials: true
}});


io.on('connection', async (socket)=>{
    console.log('Client is Connected!')
})


server.listen(3000, () => {
    console.log('Server is Running at Port 3000');
});




