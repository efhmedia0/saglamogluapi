import { Injectable } from '@nestjs/common';
import { io } from "socket.io-client";

@Injectable()
export class SocketService {
  rates
  constructor() {
    const socket = io("https://saglamoglu.onrender.com", {
      auth: {
        token: 'cdfa198e-1543-4bca-aacd-14510ddc26b8'
      },
      transports: ["websocket"],
      reconnection: true
    });

    socket.on("connect", async () => {
      console.log(socket.id);
      setInterval(() => {
        console.log(this.rates);
        socket.emit("sa", "sa");
      }, 30000)
    });

    socket.on('prices', prices => this.rates = prices);

    socket.on("disconnect", async () => {
      console.log("Disconnected");
    });
  }

  public getCurrency(key) {
    return this.rates.find((r) => r.key === key);
  }
}