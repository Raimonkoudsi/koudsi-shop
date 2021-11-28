import React from 'react';
import '@styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div class="mobile-menu">
            <ul>
                <li>
                    <p className="mobile-menu-title">CATEGORIES</p>
                </li>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li className="other">
                    <a href="/">Other</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" className="email">ramonkoudsi@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" className="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;