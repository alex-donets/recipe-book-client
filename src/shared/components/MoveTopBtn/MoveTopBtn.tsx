import React from 'react';
import { Button } from 'semantic-ui-react';

const MoveTopBtn = () => {
    const handleClick = () => window.scrollTo(0, 0);

    return <Button onClick={handleClick} className="fixed-btn" circular icon="angle up" />;
};

export default MoveTopBtn;
