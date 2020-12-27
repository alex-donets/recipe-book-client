import React from 'react';
import ReactDOM from 'react-dom';
import './shared/styles/normalize.scss';
import './index.css';
import App from './modules/app/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './core/redux/store';
import { registerServiceWorker } from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
