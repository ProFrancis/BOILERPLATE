import app from "../app.js";
import http from "http";
import { Server } from "socket.io";

// création du serveur HTTP
const server = http.createServer(app);

// création du serveur WebSocket
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// Gestion des connexions WebSocket
io.on("Connection", (socket) => {
  console.log("Socket connected");
});

export { server, io };
