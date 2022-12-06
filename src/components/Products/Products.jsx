import React from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import './Products.css';

export const Products = () => {
    const [data, setData] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(data);
    const [selectValue, setSelectValue] = React.useState('all');
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
        if (!e.target.value) {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(({title}) => title.includes(e.target.value)))
        }
    }

    const onSelectChange = (e) => {
        setSelectValue(e.target.value);
        if (e.target.value === 'all') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(({category}) => category === e.target.value))
        }
    }
    
    React.useEffect(()=> {
        axios.get('https://fakestoreapi.com/products').then((res)=>setData(res.data))
    }, [])

    React.useEffect(()=> {
        setFilteredData(data)
    }, [data])

    return (
    <>
        <div className = "search">
            <input className="products__search" placeholder = "Поиск" value={inputValue} onChange={onInputChange} />
            <select className="products__filter" value={selectValue} onChange={onSelectChange}>
                <option value="all">Все</option>
                <option value="men's clothing">Мужская одежда</option>
                <option value="jewelery">Украшения</option>
                <option value="electronics">Электроника</option>
                <option value="women's clothing">Женская одежда</option>
            </select>
        </div>
        <div className="products__container">
            {filteredData?.map((dataItem, index) => (
                <Card data={dataItem} key={index} /> 
            ))}
        </div>
    </>)
}

export default Products;