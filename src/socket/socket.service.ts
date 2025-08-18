import { Injectable } from '@nestjs/common';
import { io } from "socket.io-client";

@Injectable()
export class SocketService {
  constructor() {
    const socket = io("https://saglamoglu.onrender.com", {
      transports: ["websocket"],
      reconnection: true
    });

    socket.on("connect", async () => {
      console.log("Connected");
    });

    setInterval(() => {
      socket.emit("sa", "sa");
    }, 30000)

    socket.on("disconnect", async () => {
      console.log("Disconnected");
    });
  }
}