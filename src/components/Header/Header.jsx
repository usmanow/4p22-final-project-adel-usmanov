import React from 'react';
import './Header.css';
import logo from '../images/logo.png';
import basket from '../images/basket.png';

export const Header = () => {
    return (
        <>
            <header className = "header">
                <img className = "header-logo" src={logo} alt="logo" />
                <h1>Сlothes&Acessories</h1>
                <nav className = "header-title">
                    <div className = "header-title__main">
                        MAIN
                    </div>
                    <div className = "header-title__feedback">
                        FEEDBACK
                    </div>
                    <div className = "header-title__basket">
                        <img src={basket} alt="basket" />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;