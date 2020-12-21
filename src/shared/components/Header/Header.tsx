import React from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { getIsAdmin, getIsLoggedIn, getUserFullName } from '../../../modules/auth/selectors';
import { logout } from '../../../modules/auth/actions';

import Logo from '../../../assets/recipe-book.svg';
import Note from '../../../assets/note.svg';
import Category from '../../../assets/stickers.svg';
import useReactRouter from 'use-react-router';

const Header = () => {
    const dispatch = useDispatch();
    const { history } = useReactRouter();

    const userName = useSelector(getUserFullName);
    const isAdmin = useSelector(getIsAdmin);
    const isLoggedIn = useSelector(getIsLoggedIn);

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <Menu fixed="top" inverted className="custom-header">
            <Container>
                <Menu.Item header onClick={() => history.push('/')}>
                    <Image size="mini" src={Logo} className="header-image" alt="logo" />
                    Recipe Book
                </Menu.Item>

                {isLoggedIn && (
                    <Menu.Item onClick={() => history.push('/recipes')}>
                        <Image size="mini" src={Note} className="header-image" alt="note image" />
                        Create Recipe
                    </Menu.Item>
                )}

                {isLoggedIn && isAdmin && (
                    <Menu.Item onClick={() => history.push('/categories')}>
                        <Image size="mini" src={Category} className="header-image" alt="sticker image" />
                        Category
                    </Menu.Item>
                )}

                {isLoggedIn && (
                    <Menu.Menu data-cy="user-info-dropdown" position="right">
                        <Dropdown item text={userName || 'Guest'}>
                            <Dropdown.Menu>
                                <Dropdown.Item data-cy="logout-btn" text="Log Out" onClick={onLogout} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                )}

                {!isLoggedIn && (
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
