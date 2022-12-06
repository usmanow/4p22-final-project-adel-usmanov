import React from 'react';
import './Card.css';
export const Card = ({data}) => {

    return (
        <div className="card">
            <p className = "card__title">{data.title}</p>
            <img src={data.image} alt="product" />
            <p className = "card__description">{data.description}</p>
            <p className = "card__price">{data.price} $</p>
        </div>
    )
}

export default Card;