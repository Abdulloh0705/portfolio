import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './cards.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { GiLoveMystery } from 'react-icons/gi';
import Header from '../header/Header';
import Pages from './CardsPage/Pages';
import { addToLikes, addToBasket, setOffset } from '../service/store'; // Redux action
import Skleton from './Skleton';
import { FaShoppingBasket } from 'react-icons/fa';

const Cards = () => {
    const dispatch = useDispatch();

    // Redux state-dan ma'lumot olish
    const limit = useSelector((state) => state.page.limit);
    const offset = useSelector((state) => state.page.offset);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { value } = useContext(Context);
    const [loading, setLoading] = useState(true); // Yuklanish holati

    useEffect(() => {
        setLoading(true); // Yuklanishni boshlash
        fetch('https://dummyjson.com/products?limit=100')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setFilteredProducts(data.products);
                setLoading(false); // Yuklanish tugadi
            })
            .catch((error) => {
                console.error('API xatosi:', error);
                setLoading(false); // Xatolik yuz bersa ham yuklanishni tugatish
            });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [offset]);

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

    const handleAddToLikes = (product) => {
        dispatch(addToLikes(product));
        alert(`"${product.title}" mahsulot sevganlar ro'yxatiga qo'shildi!`);
    };

    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product));
        alert(`"${product.title}" savatchaga qo'shildi!`);
    };
    const paginatedProducts = searchFilteredProducts.slice(offset, offset + limit);

    return (
        <div className="cards">
            <Header sortProducts={sortProducts} />
            <div className="container">
                <div className="card_box">
                    {loading ? (
                        // Skeleton ko'rsatish
                        Array.from({ length: 6 }).map((_, index) => (
                            <Skleton key={index} />
                        ))
                    ) : (
                        // Mahsulotlarni ko'rsatish
                        paginatedProducts.map((product) => (
                            <div className="card" key={product.id}>
                                <div className="card_img">
                                    <Link to={`/products/${product.id}`}>
                                        <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 2000 }}>
                                            {product?.images?.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        style={{
                                                            width: (product.id === 6 && index === 0) ? "150px" : "none",
                                                            padding: (product.id === 6 && index === 0) ? "50px 0px 0px 30px" :
                                                                (product.id === 6 && index === 1) ? "70px 0px 0px 0px" :
                                                                    (product.id === 6 && index === 2) ? "80px 0px 0px 0px" : "none",
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
                                            <button className="like_btn" onClick={() => handleAddToLikes(product)}>
                                                <GiLoveMystery />
                                            </button>
                                            <button className="basket_btn" onClick={() => handleAddToBasket(product)}>
                                                <FaShoppingBasket />
                                            </button>
                                        </div>
                                        <p className="discountPercentage">%{product.discountPercentage}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="pages">
                <Pages />
            </div>
        </div>
    );
};

export default Cards;
