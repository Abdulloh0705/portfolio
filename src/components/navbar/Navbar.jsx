import React, { useContext } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';
import { Context } from '../../Context/Context';

const Navbar = () => {
    const { value, setValue } = useContext(Context);

    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav_box">
                        <div className="nav_basket">
                            <div className="basket">
                                <button className="nav_basket-btn">
                                    <FaShoppingBasket />
                                </button>
                            </div>
                            <div className="like">
                                <button className="nav_like-btn">
                                    <BiSolidLike />
                                </button>
                            </div>
                        </div>
                        <div className="nav_logo">
                            <Link to="/" className="nav_logo-title">Izana</Link>
                        </div>
                        <div className="nav_search">
                            <form>
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
        </>
    );
};

export default Navbar;
