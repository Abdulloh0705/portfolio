import React, { useState, useEffect } from 'react';
import './header.scss';

// Header komponenti
const Header = () => {
    // `isActive` holati: Price menyusining ochiq/yopiq holatini boshqaradi
    const [isActive, setActive] = useState(false);

    // `isStarActive` holati: Star menyusining ochiq/yopiq holatini boshqaradi
    const [isStarActive, setStarActive] = useState(false);

    // Tashqi joyni bosganingizda menyuni yopish funksiyasi
    const handleClickOutside = (event) => {
        // Agar tashqarida bosilgan bo'lsa va menyu ochiq bo'lsa, uni yopish
        if (!event.target.closest('.header_money') && isActive) {
            setActive(false);
        }
        if (!event.target.closest('.header_star') && isStarActive) {
            setStarActive(false);
        }
    };

    useEffect(() => {
        // `click` hodisasini tinglash
        document.addEventListener('click', handleClickOutside);
        return () => {
            // Hamma hodisalarni tozalash
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isActive, isStarActive]);

    // Price menyusini ochish/yopish funksiyasi
    const togglePriceMenu = () => {
        setActive(!isActive);
    };

    // Star menyusini ochish/yopish funksiyasi
    const toggleStarMenu = () => {
        setStarActive(!isStarActive);
    };

    return (
        <>
            {/* Header bo'limi */}
            <div className="header">
                <div className="container">
                    <div className="header_box">
                        <div className="header_price">
                            {/* Price bo'limi */}
                            <div className="header_money">
                                {/* Price tugmasi */}
                                <button
                                    className={`money_btn ${isActive ? 'active' : ''}`}
                                    onClick={togglePriceMenu} // Tugma bosilganda menyuni ochadi/yopadi
                                >
                                    <p className="btn_title">Price</p>
                                </button>
                                {/* Price menyusi ochiq bo'lsa ko'rsatiladi */}
                                {isActive && (
                                    <ul className="menu">
                                        <li>Low to High</li> {/* Pastdan yuqoriga saralash */}
                                        <li>High to Low</li> {/* Yuqoridan pastga saralash */}
                                        <li>Discounts</li>  {/* Chegirmalar */}
                                    </ul>
                                )}
                            </div>
                            {/* Star bo'limi */}
                            <div className="header_star">
                                {/* Star tugmasi */}
                                <button
                                    className={`star_btn ${isStarActive ? 'active' : ''}`}
                                    onClick={toggleStarMenu} // Tugma bosilganda menyuni ochadi/yopadi
                                >
                                    <p className="btn_title">Stock</p>
                                </button>
                                {/* Star menyusi ochiq bo'lsa ko'rsatiladi */}
                                {isStarActive && (
                                    <ul className="menu">
                                        <li>Low to High</li>
                                        <li>High to Low</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
