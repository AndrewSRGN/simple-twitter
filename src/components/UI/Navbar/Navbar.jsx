import React, { useContext } from "react";
import {Link} from "react-router-dom";

import './NavBar.css';
import Button from "../Button/Button";
import { AuthContext } from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }

    return (
        <nav className="navbar">
            {!isAuth || (
                <Button onClick={handleLogout}>
                    Logout
                </Button>
            )}
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