import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

import "./database";
import { routes } from "../routes";

//const PORT = 3333;
//const HOST = '0.0.0.0';

const app = express();

// creating http protocol
const http = createServer(app);

// creating websocket protocol
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Connected", socket.id);
});

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
    res.send('Starting server');
});

//app.listen(3333, () => console.log('Server is running on port 3333'));
http.listen(3333, () => console.log("Server is running on port 3333"));

