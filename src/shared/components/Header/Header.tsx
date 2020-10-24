import React from 'react';
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import Logo from "../../../assets/recipe-book.svg";
import Note from "../../../assets/note.svg";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserFullName } from "../../../modules/auth/selectors";
import { logout } from "../../../modules/auth/actions";

const Header = () => {
    const dispatch = useDispatch();

    const userName = useSelector(getUserFullName);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <Menu
            fixed="top"
            inverted
            className="custom-header"
        >
            <Container>
                <Menu.Item
                    header
                    as="a"
                    href="/home"
                >
                    <Image
                        size="mini"
                        src={Logo}
                        style={{ marginRight: '1.5em' }}
                    />
                    Recipe Book
                </Menu.Item>

                {isLoggedIn ? (
                    <>
                        <Menu.Item
                            as="a"
                            href="/create-post"
                        >
                            <Image
                                size="mini"
                                src={Note}
                                style={{ marginRight: '1.5em' }}
                            />
                            Create Recipe
                        </Menu.Item>
                        <Menu.Menu
                            position='right'
                        >
                            <Dropdown
                                item
                                text={userName}
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        text='Log Out'
                                        onClick={onLogout}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </>
                ) : (
                    <Menu.Menu position="right">
                        <Menu.Item
                            as="a"
                            href="/login"
                        >
                            Login
                        </Menu.Item>
                        <Menu.Item
                            as="a"
                            href="/register"
                        >
                            Register
                        </Menu.Item>
                    </Menu.Menu>
                )}
            </Container>
        </Menu>
    );
};

export default Header;
