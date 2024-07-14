import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketch-ease-server.onrender.com' : 'http://localhost:5001'
export const socket = io(URL);