import { uiUrl } from './services/services';

export const registerServiceWorker = () => {
    const swUrl = `${uiUrl}/serviceWorker.js`;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(swUrl)
            .then(() => console.log('Service worker successfully registered'))
            .catch((error) => console.log('Service worker registration failed', error));
    }
};
