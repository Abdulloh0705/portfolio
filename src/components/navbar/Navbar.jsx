import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../service/store'; // Redux action import
import { getProducts } from '../service/products';

const Navbar = () => {
    const {data } = getProducts(search)
    const likesCount = useSelector((state) => state.products.likes.length);
    const basketCount = useSelector((state) => state.products.basket.length);
    const search = useSelector((state) => state.products.search); // Redux store-dan qidiruvni olish
    const dispatch = useDispatch();

    const [value, setValue] = useState(search || ''); // `search`ni Reduxdan olamiz

    useEffect(() => {
        // `value` yangilanganida, uni Redux store'ga va localStorage'ga saqlaymiz
        dispatch(setSearch(value));
        localStorage.setItem('searchValue', value);
    }, [value, dispatch]); // `value` va `dispatch` o'zgarishiga javoban ishlaydi

    return (
        <div className="nav">
            <div className="container">
                <div className="nav_box">
                    <div className="nav_basket">
                        <div className="basket">
                            <button className="nav_basket-btn">
                                <FaShoppingBasket />
                                {basketCount > 0 && <span className="nav_badge">{basketCount}</span>}
                            </button>
                        </div>
                        <div className="like">
                            <button className="nav_like-btn">
                                <BiSolidLike />
                                {likesCount > 0 && <span className="nav_badge">{likesCount}</span>}
                            </button>
                        </div>
                    </div>
                    <div className="nav_logo">
                        <Link to="/" className="nav_logo-title">Izana</Link>
                    </div>
                    <div className="nav_search">
                        <form className='from'>
                            <input
                                type="text"
                                placeholder="product name"
                                value={value}
                                onChange={(e) => setValue(e.target.value)} // inputdagi o'zgarishni `value`ga qo'shish
                            />
                        </form>
                        <div className="nav_from_search">
                            <button className="from_search">
                                <IoSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
