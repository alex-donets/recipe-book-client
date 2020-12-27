import axios from 'axios';
import io from 'socket.io-client';

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});

const options = {
    forceNew: true,
    transports: ['websocket'],
};

export const socket = io.connect(process.env.REACT_APP_API_URL, options);
