import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './cards.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { GiLoveMystery } from 'react-icons/gi';
import Header from '../header/Header';
import Pages from './CardsPage/Pages';

const Cards = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { value } = useContext(Context);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            })
            .catch((error) => console.error('API xatosi:', error));
    }, []);

    const sortProducts = (criteria) => {
        let sortedProducts = [...products];
        if (criteria === 'priceLowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === 'priceHighToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (criteria === 'discounts') {
            sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
        } else if (criteria === 'stockLowToHigh') {
            sortedProducts.sort((a, b) => a.stock - b.stock);
        } else if (criteria === 'stockHighToLow') {
            sortedProducts.sort((a, b) => b.stock - a.stock);
        }
        setFilteredProducts(sortedProducts);
    };

    const searchFilteredProducts = filteredProducts.filter((product) => {
        const words = product.title.split(' ');
        const firstWord = words[0]?.toLowerCase();
        const restWords = words.slice(1).join(' ').toLowerCase();

        return (
            firstWord.startsWith(value.toLowerCase()) ||
            restWords.startsWith(value.toLowerCase())
        );
    });

    return (
        <div className="cards">
            <Header sortProducts={sortProducts} />
            <div className="container">
                
                <div className="card_box">
                    {searchFilteredProducts.map((product) => (
                        <div className="card" key={product.id}>
                            <div className="card_img">
                                <Link to={`/products/${product.id}`}>
                                    <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 2000 }}>
                                        {product?.images?.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                style={{ 
                                                    width: (product.id === 6 && index === 0) ? "160px" : "none",
                                                    padding: (product.id === 6  && index ===0) ? "80px 0px 10px 50px" : "none",
                                                }}
                                                    className="card_img1"
                                                    src={image}
                                                    alt={product.title}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Link>
                            </div>
                            <div className="product_esse">
                                <div className="product_text">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="price_stock">
                                    <p className="product_price">Price: ${product.price}</p>
                                    <p className="product_stock">Stock: {product.stock}</p>
                                    <div className="cards_like">
                                        <Link to="/like">
                                            <button className="like_btn">
                                                <GiLoveMystery />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
