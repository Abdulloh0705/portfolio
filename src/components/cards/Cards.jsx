import React, { useState, useEffect } from 'react'; // React kutubxonasidan kerakli komponentlarni import qilish
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper kutubxonasidan kerakli komponentlarni import qilish
import 'swiper/css'; // Swiperning CSS faylini ulash

import './cards.scss'; // O'zining SCSS faylini ulash

const Cards = () => {
    const [products, setProducts] = useState([]); // Mahsulotlar ro'yxatini saqlash uchun React holati (state)

    // Komponent birinchi marta yuklanganda API orqali ma'lumot olish
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100') // DummyJSON APIga 100 ta mahsulotni olish uchun so'rov
            .then((response) => response.json()) // API javobini JSON formatiga o'girish
            .then((data) => {
                console.log('API Response:', data); // Konsolda API javobini ko'rsatish (faqat tekshirish uchun)
                setProducts(data.products); // Javobdan olingan mahsulotlarni state-ga yozish
            })
            .catch((error) => console.error('API xatosi:', error)); // Xatolik bo'lsa, konsolga chiqarish
    }, []); // Faqat bir marta ishlashi uchun bo'sh dependency massivi

    products.map((prod) => {
        prod?.images?.map((item) => {
            console.log(item);
        })
    });


    return (
        <div className="cards">
            <div className="container"> {/* Mahsulotlarni o'rab turadigan asosiy konteyner */}
                <div className="card_box"> {/* Karta ro'yxatini qutiga joylash */}
                    {products.map((product) => ( // Mahsulotlarni mapping qilish orqali har bir mahsulot uchun karta yaratish
                        <div className="card" key={product.id}> {/* Har bir mahsulot kartasi */}
                            <Swiper
                                spaceBetween={10} // Slayder orasidagi bo'shliqni sozlash
                                slidesPerView={1} // Har safar bir slayd ko'rsatiladi
                                autoplay={{ delay: 2000 }} // Slaydlar avtomatik o'zgarishi uchun sozlama
                            >
                                {product?.images?.map((image, index) => ( // Har bir tasvir uchun slayd yaratish
                                    <SwiperSlide key={index}> {/* Slayderdagi bitta rasm */}
                                        <img
                                            src={`${image}`} // API dan olingan rasm URL'ini ulash
                                            alt={`${product.title}`} // Mahsulot nomini alt atributida ko'rsatish
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="product_text"> {/* Mahsulot haqida ma'lumot */}
                                <h3>{product.title}</h3> {/* Mahsulot nomini ko'rsatish */}
                                <p>Price: ${product.price}</p> {/* Mahsulot narxini ko'rsatish */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards; // Cards komponentini eksport qilish
