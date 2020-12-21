import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const CircularProgress = () => {
    return (
        <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
        </Dimmer>
    );
};

export default CircularProgress;
