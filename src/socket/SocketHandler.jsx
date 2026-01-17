import { io } from "socket.io-client";
    

const SocketHandler = io("http://localhost:5000", {
  autoConnect: true,
});

export default SocketHandler;
