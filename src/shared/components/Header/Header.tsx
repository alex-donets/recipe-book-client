import React from 'react';
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import { getIsAdmin, getIsLoggedIn, getUserFullName } from "../../../modules/auth/selectors";
import { logout } from "../../../modules/auth/actions";

import Logo from "../../../assets/recipe-book.svg";
import Note from "../../../assets/note.svg";
import Category from "../../../assets/stickers.svg";

const Header = () => {
    const dispatch = useDispatch();

    const userName = useSelector(getUserFullName);
    const isAdmin = useSelector(getIsAdmin);
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

                {isLoggedIn &&
                    <Menu.Item
                        as="a"
                        href="/create-recipe"
                    >
                        <Image
                            size="mini"
                            src={Note}
                            style={{ marginRight: '1.5em' }}
                        />
                        Create Recipe
                    </Menu.Item>
                }

                {isLoggedIn && isAdmin &&
                    <Menu.Item
                        as="a"
                        href="/categories"
                    >
                        <Image
                            size="mini"
                            src={Category}
                            style={{ marginRight: '1.5em' }}
                        />
                        Create Category
                    </Menu.Item>
                }

                {isLoggedIn &&
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
                }

                {!isLoggedIn &&
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
                }
            </Container>
        </Menu>
    );
};

export default Header;
