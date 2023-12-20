// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        {/* Replace with your SVG or image */}
                        <img src="your-logo.svg" alt="Logo" width="30" height="24" />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2023 WEATHER(GET), Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                </ul>

                {/* Адаптивные классы Bootstrap для изменения стилей на маленьких экранах */}
                <div className="col-12 mt-3 text-center text-md-start">
                    <small className="text-body-secondary">Follow us on social media</small>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
