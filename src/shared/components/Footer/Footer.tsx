import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import useReactRouter from 'use-react-router';

const Footer = () => {
    const { history } = useReactRouter();

    const handleClick = (path) => {
        history.push(path);
    };

    const date = new Date();
    const year = date.getFullYear();

    return (
        <Segment vertical className="custom-footer">
            <Container textAlign="center">
                <List horizontal inverted divided link size="small">
                    <List.Item as="a" onClick={() => handleClick('/')}>
                        All Rights Reserved
                    </List.Item>
                    <List.Item as="a" onClick={() => handleClick('/terms-and-conditions')}>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as="a" onClick={() => handleClick('/')}>
                        TM and copyright © {year}
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
};

export default Footer;
