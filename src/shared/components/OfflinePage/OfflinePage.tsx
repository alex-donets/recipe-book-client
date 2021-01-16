import React from 'react';
import OfflineImg from '../../../assets/offline.svg';
import './styles.scss';

const OfflinePage = () => {
    return (
        <div className="empty-holder">
            <img src={OfflineImg} alt="offline image" className="offline-img" />
            <div>You are currently offline</div>
        </div>
    );
};

export default OfflinePage;
