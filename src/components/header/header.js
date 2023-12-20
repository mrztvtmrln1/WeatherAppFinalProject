import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './header.css';

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="md" className="py-3 mb-4 border-bottom">
                <Navbar.Brand>
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <svg className="bi" width="40" height="32" role="img" aria-label="Weather App Logo">
                            <use xlinkHref="#weather-logo"></use>
                        </svg>
                        <span className="ms-2">WEATHER(GET)</span>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav className="mr-auto">
                        <Link to="/" className="nav-link px-2 link-secondary">
                            Home
                        </Link>
                        <NavDropdown title="Services" id="collasible-nav-dropdown" className="link-secondary">
                            <Link to="/search" className="dropdown-item">
                                Forecast search
                            </Link>
                            <Link to="/settings" className="dropdown-item">
                                Settings
                            </Link>
                        </NavDropdown>
                        <Link to="/faq" className="nav-link px-2">
                            FAQs
                        </Link>
                        <Link to="/aboutus" className="nav-link px-2">
                            About
                        </Link>
                    </Nav>
                    <Nav className="text-end">
                        {isLoggedIn ? (
                            <>
                                <Link to="/login" className="btn btn-outline-danger me-2" onClick={onLogout}>
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-primary me-2">
                                    Login
                                </Link>
                                <Link to="/register" className="btn btn-primary">
                                    Sign-up
                                </Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default withRouter(Header);
