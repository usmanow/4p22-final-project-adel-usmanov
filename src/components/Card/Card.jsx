import React from 'react';
import {Link} from 'react-router-dom'
import './Card.css';
export const Card = ({data, withAction}) => {

    return (
        <div className="card">
            <p className="card__title">{data?.title}</p>
            <img src={data?.image} alt="product" />
            <p className="card__description">{data?.description}</p>
            <p className="card__price">{data?.price} $</p>
            {withAction && (<p className="card__opening"><Link to={`/product/${data?.id}`}>Подробнее</Link></p>)}
        </div>
    )
}

export default Card;