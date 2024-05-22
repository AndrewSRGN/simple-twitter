import React from 'react';
import {Link} from "react-router-dom";

import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <Link to="/posts" className="navbar__link">Posts</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/about" className="navbar__link">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;