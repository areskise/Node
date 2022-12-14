import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
        .then((response) => response.json())
            .then((data) => {
                setCart(data);
            })
            .catch(err => console.log(err));
    }, []);

    const onDeleteItem = e => {
        const productId = e.target.productId.value;
        fetch('http://localhost:5000/cart-delete-item', { 
            method: 'POST',
            body: JSON.stringify({productId: productId }),
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => console.log("data:", data));
    };

    const postOrder = () => {
        fetch('http://localhost:5000/create-order',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        }
    )
        .then((res) => navigate('/orders'))
        .catch(err => console.log(err));
    };

    const cartList = () => {
        if (cart.length > 0) {
            const renderCart = cart.map(item => {
            return (
                <li className="cart__item">
                    <h3>
                        {item.productId.title}
                    </h3>
                    <h3>
                        (Quantity: {item.quantity})
                    </h3>
                    <form onSubmit={onDeleteItem}>
                        <input type='hidden' name='productId' value={item.productId._id} />
                        <button className='btn' type='submit'>
                        Delete Item
                        </button>
                    </form>
                </li>
            );
            });
            return (
            <main className='centered'>
                <ul className="cart__item-list">
                    {renderCart}
                </ul>
                <hr />
                <div class="centered">
                    <form type='submit' onSubmit={postOrder}>
                        <button type='submit' className='btn'>
                            Order Now!
                        </button>
                    </form>
                </div>
            </main>
            );
        } else {
            return (
            <div>
                <h2>No Products in Cart!</h2>
            </div>
            );
        };
    };

    return(
        <div>
            <h1>Cart</h1>
            {cartList()}
        </div>
    );
};

export default Cart;