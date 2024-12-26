import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './cards.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

const Cards = () => {
    const [products, setProducts] = useState([]); // Mahsulotlarni holatda saqlash
    const { value } = useContext(Context); // Navbar'dan input qiymatini olish

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100') // API so‘rovi
            .then((response) => response.json())
            .then((data) => setProducts(data.products)) // Mahsulotlarni holatga yozish
            .catch((error) => console.error('API xatosi:', error)); // Xatolikni ushlash
    }, []);

    // Qo'shilgan kod: Faqat birinchi yoki qolgan so'zlarni qidirish
    const filteredProducts = products.filter((product) => {
        const words = product.title.split(' '); // Satrni so'zlarga bo'lish
        const firstWord = words[0]?.toLowerCase(); // Birinchi so'z
        const restWords = words.slice(1).join(' ').toLowerCase(); // Qolgan so'zlar

        return (
            firstWord.startsWith(value.toLowerCase()) || // Birinchi so'z mos bo'lsa
            restWords.startsWith(value.toLowerCase()) // Qolgan so'zlar mos bo'lsa
        );
    });

    return (
        <div className="cards">
            <div className="container">
                <div className="card_box">
                    {filteredProducts.map((product) => (
                        <div className="card" key={product.id}>
                        <div className="card_img">
                            <Link to={`/products/${product.id}`}>
                                <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 2000 }}>
                                    {product?.images?.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img 
                                                className="card_img1" 
                                                style={{
                                                    width: (product.id === 6 && index === 0) ? '125px' : (product.id === 6 && index === 2) ? '230px' : 'none',
                                                    padding: (product.id === 6 && index === 0,1,2) ? '40px 0px 0px 20px' : 'none',
                                                    height: (product.id === 6 && index === 2) ? 'auto' : 'none',
                                                    margin: (product.id === 6 && index === 0 , 1 ,2) ? '0  auto' : 'none',}} 
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
