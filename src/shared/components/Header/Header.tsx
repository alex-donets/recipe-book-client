import React from 'react';
import { Container, Image, Menu } from "semantic-ui-react";
import logo from "../../../assets/diary.svg";
import salad from "../../../assets/salad.svg";
import avatar from "../../../assets/fairy.png";

const Header = () => {
    const user = false;
    return (
        <Menu fixed="top" inverted className="custom-header">
            <Container>
                <Menu.Item as="a" header href="/">
                    <Image
                        size="mini"
                        src={logo}
                        style={{ marginRight: '1.5em' }}
                    />
                    Recipe Book
                </Menu.Item>
                {user && (
                    <Menu.Item as="a" href="/create-post">
                        <Image
                            size="mini"
                            src={salad}
                            style={{ marginRight: '1.5em' }}
                        />
                        Create Recipe
                    </Menu.Item>
                )}

                {user ? (
                    <Menu.Menu position="right">
                        <Menu.Item as="a" header href="/user-profile">
                            Whiskered Fairy
                            <Image
                                size="mini"
                                src={avatar}
                                style={{ marginLeft: '1.5em' }}
                            />
                        </Menu.Item>
                        <Menu.Item as="a">Log out</Menu.Item>
                    </Menu.Menu>
                ) : (
                    <Menu.Menu position="right">
                        <Menu.Item as="a" href="/login">
                            Login
                        </Menu.Item>
                        <Menu.Item as="a" href="/register">
                            Register
                        </Menu.Item>
                    </Menu.Menu>
                )}
            </Container>
        </Menu>
    );
};

export default Header;
