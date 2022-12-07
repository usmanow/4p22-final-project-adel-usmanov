import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import basket from '../images/basket.png';

export const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-heading">
                    <img className="header-logo" src={logo} alt="logo" />
                    <h1>Сlothes&Aсcessories</h1>
                </div>
                <nav className="header-title">
                    <div className="header-title__main">
                        <Link to='/'>MAIN</Link>
                    </div>
                    <div className="header-title__feedback">
                        <Link to='/feedback/'>FEEDBACK</Link>
                    </div>
                    <div className="header-title__basket">
                        <img src={basket} alt="basket" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;