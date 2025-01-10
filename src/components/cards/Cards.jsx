import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./cards.scss";
import { Link } from "react-router-dom";
import { GiLoveMystery } from "react-icons/gi";
import Header from "../header/Header";
import Pages from "./CardsPage/Pages";
import { addToLikes, addToBasket } from "../service/store";
import Skleton from "./Skleton";
import { FaShoppingBasket } from "react-icons/fa";
import { getProducts } from "../service/products";

const Cards = () => {
    const dispatch = useDispatch();

    // Redux state-dan ma'lumot olish
    const limit = useSelector((state) => state.page.limit);
    const offset = useSelector((state) => state.page.offset);

    // Local state
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const search = useSelector((state) => state.products.search); // Redux store-dan qidiruvni olish

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await getProducts(search); // getProducts chaqiriladi
            setProducts(result.products);
        };

        fetchProducts();
    }, [search]); // search o'zgarganida mahsulotlarni yangilash

    // Mahsulotlarni yuklash
    useEffect(() => {
        setLoading(true);
        fetch("https://dummyjson.com/products?limit=100")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error("API xatosi:", error);
                setLoading(false);
            });
    }, []);

    // Scrollni qayta yuklash
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [offset]);

    // Mahsulotlarni saralash
    const sortProducts = (criteria) => {
        let sortedProducts = [...products];
        if (criteria === "priceLowToHigh") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (criteria === "priceHighToLow") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (criteria === "discounts") {
            sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
        } else if (criteria === "stockLowToHigh") {
            sortedProducts.sort((a, b) => a.stock - b.stock);
        } else if (criteria === "stockHighToLow") {
            sortedProducts.sort((a, b) => b.stock - a.stock);
        }
        setProducts(sortedProducts);
    };

    // Likega qo'shish
    const handleAddToLikes = (product) => {
        dispatch(addToLikes(product));
        alert(`"${product.title}" mahsulot sevganlar ro'yxatiga qo'shildi!`);
    };

    // Savatchaga qo'shish
    const handleAddToBasket = (product) => {
        dispatch(addToBasket(product));
        alert(`"${product.title}" savatchaga qo'shildi!`);
    };

    // Paginatsiya bo'yicha mahsulotlarni ko'rsatish
    const paginatedProducts = products.slice(offset, offset + limit);

    return (
        <div className="cards">
            <Header sortProducts={sortProducts} />
            <div className="container">
                <div className="card_box">
                    {loading
                        ? Array.from({ length: 6 }).map((_, index) => <Skleton key={index} />)
                        : paginatedProducts.map((product) => (
                              <div className="card" key={product.id}>
                                  <div className="card_img">
                                      <Link to={`/products/${product.id}`}>
                                          <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 2000 }}>
                                              {product?.images?.map((image, index) => (
                                                  <SwiperSlide key={index}>
                                                      <img
                                                          style={{
                                                              width: product.id === 6 && index === 0 ? "150px" : "none",
                                                              padding:
                                                                  product.id === 6 && index === 0
                                                                      ? "50px 0px 0px 30px"
                                                                      : product.id === 6 && index === 1
                                                                      ? "70px 0px 0px 0px"
                                                                      : product.id === 6 && index === 2
                                                                      ? "80px 0px 0px 0px"
                                                                      : "none",
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
                          ))}
                </div>
            </div>
            <div className="pages">
                <Pages />
            </div>
        </div>
    );
};

export default Cards;
