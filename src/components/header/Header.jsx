import React, { useState, useEffect } from 'react';
import './header.scss';

// Header komponenti
const Header = ({ sortProducts }) => {
    const [isActive, setActive] = useState(false);
    const [isStarActive, setStarActive] = useState(false);

    
    const handleClickOutside = (event) => {
        if (!event.target.closest('.header_money') && isActive) {
            setActive(false);
        }
        if (!event.target.closest('.header_star') && isStarActive) {
            setStarActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isActive, isStarActive]);

    const togglePriceMenu = () => {
        setActive(!isActive);
    };

    const toggleStarMenu = () => {
        setStarActive(!isStarActive);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header_box">
                    <div className="header_price">
                        <div className="header_money">
                            <button
                                className={`money_btn ${isActive ? 'active' : ''}`}
                                onClick={togglePriceMenu}
                            >
                                <p className="btn_title">Price</p>
                            </button>
                            {isActive && (
                                <ul className="menu">
                                    <li onClick={() => sortProducts('priceLowToHigh')}>Low to High</li>
                                    <li onClick={() => sortProducts('priceHighToLow')}>High to Low</li>
                                    <li onClick={() => sortProducts('discounts')}>Discounts</li>
                                </ul>
                            )}
                        </div>
                        <div className="header_star">
                            <button
                                className={`star_btn ${isStarActive ? 'active' : ''}`}
                                onClick={toggleStarMenu}
                            >
                                <p className="btn_title">Stock</p>
                            </button>
                            {isStarActive && (
                                <ul className="menu">
                                    <li onClick={() => sortProducts('stockLowToHigh')}>Low to High</li>
                                    <li onClick={() => sortProducts('stockHighToLow')}>High to Low</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
