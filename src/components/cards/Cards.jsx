import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Yangi CSS faylini import qilish

import "./cards.scss";

// Cards komponenti
const Cards = () => {
    const [products, setProducts] = useState([]); // Mahsulotlar ro'yxatini saqlash uchun holat

    // useEffect - komponent ishlaganda faqat bir marta API dan ma'lumot olish
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100') // API ga so'rov yuborish
            .then(response => response.json()) // Javobni JSON formatiga o'tkazish
            .then(data => setProducts(data.products)); // Mahsulotlar ro'yxatini holatga saqlash
    }, []);

    return (
        <div className="cards">
            <div className="container">
                <div className="card_box">
                    {/* Mahsulotlarni ekranga chiqarish */}
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            {/* Swiper uchun tasvirlar */}
                            <Swiper
                                spaceBetween={10} // Rasm orasidagi bo'shliq
                                slidesPerView={1} // Har bir safar faqat bir rasm ko'rsatiladi
                                autoplay={{ delay: 2000 }} // Avtomatik o'zgarish vaqti
                                loop={products.length > 2} // Har bir rasm oxiriga yetganda boshidan boshlanishi
                            >
                                {product.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={`${product.title} image ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            
                          <div className="product_text">
                          <h3>{product.title}</h3>
                            
                            <p>Price: ${product.price}</p>
                          </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
