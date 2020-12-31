import axios from 'axios';
import io from 'socket.io-client';

export const apiUrl =
    process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const uiUrl =
    process.env.NODE_ENV === 'development' ? process.env.REACT_APP_UI_URL_DEV : process.env.REACT_APP_UI_URL_PROD;

console.log('ENVIRONMENT: ', process.env.NODE_ENV);
console.log('uiUrl', uiUrl);
console.log('apiUrl', apiUrl);

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL_DEV,
    withCredentials: true,
});

const options = {
    forceNew: true,
    transports: ['websocket'],
};

export const socket = io.connect(apiUrl, options);
