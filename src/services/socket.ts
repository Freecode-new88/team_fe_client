import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (socket) return socket;

  const url = process.env.NEXT_PUBLIC_SOCKET_URL;
  if (!url) {
    console.error("[socket] NEXT_PUBLIC_SOCKET_URL is missing");
  }

  socket = io(url ?? "http://localhost:3002", {
    path: "/socket.io",
    transports: ["websocket", "polling"], 
    withCredentials: false,               
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 500,
    reconnectionDelayMax: 5000,
    autoConnect: true,                    
  });

  return socket;
}
