import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../service/store"; // Redux action import

const Navbar = () => {
    const dispatch = useDispatch();
    const likesCount = useSelector((state) => state.products.likes.length);
    const basketCount = useSelector((state) => state.products.basket.length);
    const search = useSelector((state) => state.products.search);

    const [value, setValue] = useState(search || ""); 

    useEffect(() => {
        dispatch(setSearch(value));
        
    }, [value, dispatch]);

   
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
                            <button className="nav_like-btn" >
                                <BiSolidLike />
                                {likesCount > 0 && <span className="nav_badge">{likesCount}</span>}
                            </button>
                        </div>
                    </div>
                    <div className="nav_logo">
                        <Link to="/" className="nav_logo-title">
                            Izana
                        </Link>
                    </div>
                    <div className="nav_search">
                        <form className="from">
                            <input
                                type="text"
                                placeholder="product name"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
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
