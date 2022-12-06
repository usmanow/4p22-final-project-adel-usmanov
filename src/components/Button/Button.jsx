import React from 'react';
import './Button.css';

export const Button = ({text = 'Текст по-умолчанию'}) => {
    return (
        <button>{text}</button>
    )
}

export default Button;