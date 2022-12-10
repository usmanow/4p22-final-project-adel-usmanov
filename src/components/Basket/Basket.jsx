import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Basket.css';

export const Basket = () => {
const myBusket = JSON.parse(localStorage.getItem('basket'))

    return (
        <>
            <Header />
            <div className="basket">
                <div className="basket__products">Мои товары</div>
                {myBusket?.map((item, index)=> (
                <Card withAction={false} data={item} key={index} />
                )
                )}
            </div>
        </>
    )
}

export default Basket