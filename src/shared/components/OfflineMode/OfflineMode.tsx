import React from 'react';
import './styles.scss'
import {Message} from "semantic-ui-react";

const OfflineMode = () => {
    const isOfflineMode = false;
    return (
        <div className="offline-mode">
            {isOfflineMode && (
                <Message
                    warning
                    floating
                    visible={isOfflineMode}
                >
                    You are currently offline. Certain functionally may not be available.
                </Message>
            )}
        </div>
    );
};

export default OfflineMode;
