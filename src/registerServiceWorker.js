export const registerServiceWorker = () => {
    const swUrl = `${process.env.REACT_APP_UI_URL}/serviceWorker.js`;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(swUrl)
            .then(() => console.log('Service worker successfully registered'))
            .catch((error) => console.log('Service worker registration failed', error));
    }
};
