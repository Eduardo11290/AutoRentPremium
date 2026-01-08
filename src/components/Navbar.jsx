import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaInstagram, FaFacebookF, FaTwitter, FaShoppingCart, FaCaretDown, FaCar } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Function to handle scrolling to categories
    const scrollToCategory = (categoryId) => {
        // If we are not on the home page, go there first
        if (location.pathname !== '/' && location.pathname !== '/cars') {
            navigate('/');
            // Small delay to allow page to load before scrolling
            setTimeout(() => {
                const element = document.getElementById(categoryId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // If we are already on home page, just scroll
            const element = document.getElementById(categoryId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                {/* 1. LOGO */}
                <Link to="/about" className="navbar-logo">
                    AutoRent <span className="highlight">Premium</span>
                </Link>

                {/* 2. CENTER NAVIGATION */}
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/cars" className="nav-links">
                        Acasă
                        </Link>
                    </li>

                    {/* DROPDOWN CATEGORIES */}
                    <li className="nav-item dropdown">
                        <div className="nav-links dropbtn">
                            Flota Noastră <FaCaretDown className="icon-tiny"/>
                        </div>
                        <div className="dropdown-content">
                            <div onClick={() => scrollToCategory('cat-0')} className="dropdown-link">Economic & Compact</div>
                            <div onClick={() => scrollToCategory('cat-1')} className="dropdown-link">Luxury & Executive</div>
                            <div onClick={() => scrollToCategory('cat-2')} className="dropdown-link">Supercars & Sport</div>
                            <div onClick={() => scrollToCategory('cat-3')} className="dropdown-link">SUV & Family</div>
                            <div onClick={() => scrollToCategory('cat-4')} className="dropdown-link">Electric & Hybrid</div>
                        </div>
                    </li>

                    {/* DROPDOWN SOCIALS */}
                    <li className="nav-item dropdown">
                        <div className="nav-links dropbtn">
                            Socials <FaCaretDown className="icon-tiny"/>
                        </div>
                        <div className="dropdown-content">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="dropdown-link">
                                <FaInstagram /> Instagram
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="dropdown-link">
                                <FaFacebookF /> Facebook
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="dropdown-link">
                                <FaTwitter /> Twitter
                            </a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">Contact</Link>
                    </li>
                </ul>

                {/* 3. CART ICON */}
                <Link to="/cart" className="cart-icon-container">
                    <span className="cart-text">Coș</span>
                    <div className="cart-icon-wrapper">
                        <FaShoppingCart className="cart-icon" />
                        {cartItems.length > 0 && (
                            <span className="cart-badge">{cartItems.length}</span>
                        )}
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;