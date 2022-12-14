import { useNavigate } from 'react-router-dom';
import React from 'react';

function Nav({loggedIn, setLoggedIn, cookies}) {
    const navigate = useNavigate();

    const handleLogOut = () => {
        
		fetch('http://localhost:5000/logout', {
			method: 'POST',
			body: '',
			headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
		})
            .then(res => {
                cookies.set('loggedIn', false);
                setLoggedIn(cookies.get('loggedIn'));
                navigate('/login');
            })
            .catch(err => console.log(err));
}

    return(
        <header className="main-header">
            {loggedIn === 'true' &&
            <nav className="main-header__nav">
                <ul className="main-header__item-list">
                    <li className="main-header__item"><a href="/">Shop</a></li>
                    <li className="main-header__item"><a href="/products">Products</a></li>
                    <li className="main-header__item"><a href="/cart">Cart</a></li>
                    <li className="main-header__item"><a href="/orders">Orders</a></li>
                    <li className="main-header__item"><a href="/add-product">Add Product</a></li>
                    <li className="main-header__item"><a href="/admin/products">Admin Products</a></li>
                </ul>
                <ul className='main-header__item-list'>
                    <li className='main-header__item'>
                        <div className='main-header__btn' onClick={() => handleLogOut()}>Log Out</div>
                    </li>
                </ul>
            </nav>
            }
            {loggedIn !== 'true' &&
            <nav className='main-header__nav'>
            <ul className='main-header__item-list'>
                <li className='main-header__item'><a href="/">Shop</a></li>
                <li className='main-header__item'><a href="/products">Products</a></li>
            </ul>
            <ul className='main-header__item-list'>
                <li className='main-header__item'><a href="/login">Log In</a></li>
                <li className='main-header__item'><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
            }
        </header> 
    );
};

export default Nav;