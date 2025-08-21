import { Injectable } from '@nestjs/common';
import { io } from "socket.io-client";

@Injectable()
export class SocketService {
  constructor() {
    const socket = io("https://saglamoglu.onrender.com", {
      auth: {
        token: 'c1dd7d1b-7686-468d-b802-03249febb6d5'
      },
      transports: ["websocket"],
      reconnection: true
    });

    socket.on("connect", async () => {
      setInterval(() => {
        socket.emit("sa", "sa");
      }, 30000)
    });

    socket.on("disconnect", async () => {
      console.log("Disconnected");
    });
  }
}