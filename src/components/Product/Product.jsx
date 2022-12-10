import React from 'react';
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import './Product.css'
import Header from '../Header/Header';

export const Product = () => {
    const [detailData, setDetailData] = React.useState();
    const { productId } = useParams();
    
    React.useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then((res)=>setDetailData(res.data))
    }, [productId])

    const onButtonClick = () => {
    const myBasket = JSON.parse(localStorage.getItem('basket'));
    if (!myBasket) {
        localStorage.setItem(
           'basket',
            JSON.stringify([ 
            detailData])
        );

    } else {
        localStorage.setItem(
            'basket',
             JSON.stringify([ 
             ...myBasket, detailData])
         );
    }
}   
return (
    <>
        <Header />
        <div className="back-link">
            <Link to="/">На главную</Link>
        </div>
        <div className="card-opening">
            <p className="card-opening__title">
                {detailData?.title}
            </p>
            <p className="card-opening__image"><img src={detailData?.image} alt="product"/></p>
            <p className="card-opening__price">
                {detailData?.price} $
            </p>
            <button className="card-opening__button" onClick={onButtonClick}>Купить</button>
        </div>
    </>
    )
}

export default Product;