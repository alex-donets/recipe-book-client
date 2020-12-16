import React from 'react';
import './styles.scss'
import {Message} from "semantic-ui-react";

const OfflineMode = () => {
    return (
        <div className="offline-mode">
            <Message warning floating>
                You are currently offline. Certain functionally may not be available.
            </Message>
        </div>
    );
};

export default OfflineMode;
