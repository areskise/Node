import React from 'react';

function Nav() {
    return(
        <header class="main-header">
            <nav class="main-header__nav">
                <ul class="main-header__item-list">
                    <li class="main-header__item"><a href="/">Shop</a></li>
                    <li class="main-header__item"><a href="/add-product">Add Product</a></li>
                </ul>
            </nav>
        </header> 
    );
};

export default Nav;