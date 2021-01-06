import React from 'react';
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react';
import './styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getIsAdmin, getIsLoggedIn, getUserFullName } from '../../../modules/auth/selectors';
import { logout } from '../../../modules/auth/actions';

import Logo from '../../../assets/recipe-book.svg';
import Note from '../../../assets/note.svg';
import Category from '../../../assets/stickers.svg';
import Chat from '../../../assets/chat.svg';
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
            <Container className="header-container">
                <div className="header-left">
                    <Menu.Item header onClick={() => history.push('/')}>
                        <Image size="mini" src={Logo} className="header-image" alt="logo" />
                        <span className="header-text-primary">Recipe Book</span>
                    </Menu.Item>

                    {isLoggedIn && (
                        <Menu.Item onClick={() => history.push('/recipes')}>
                            <Image size="mini" src={Note} className="header-image" alt="note image" />
                            <span className="header-text-secondary">Create Recipe</span>
                        </Menu.Item>
                    )}

                    {isLoggedIn && isAdmin && (
                        <Menu.Item onClick={() => history.push('/categories')}>
                            <Image size="mini" src={Category} className="header-image" alt="sticker image" />
                            <span className="header-text-secondary">Category</span>
                        </Menu.Item>
                    )}

                    {isLoggedIn && (
                        <Menu.Item onClick={() => history.push('/chat-room')}>
                            <Image size="mini" src={Chat} className="header-image" alt="note image" />
                            <span className="header-text-secondary">Chat room</span>
                        </Menu.Item>
                    )}
                </div>

                <div className="header-right">
                    {isLoggedIn && (
                        <Menu.Menu data-cy="user-info-dropdown">
                            <Dropdown item className="header-text-primary" text={userName || 'Guest'} icon="user">
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        className="header-dropdown"
                                        data-cy="logout-btn"
                                        text="Log Out"
                                        onClick={onLogout}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Menu.Menu>
                                <Menu.Item onClick={() => history.push('/login')}>Login</Menu.Item>
                            </Menu.Menu>
                            <Menu.Menu>
                                <Menu.Item onClick={() => history.push('/register')}>Register</Menu.Item>
                            </Menu.Menu>
                        </>
                    )}
                </div>
            </Container>
        </Menu>
    );
};

export default Header;
