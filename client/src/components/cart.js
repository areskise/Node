import React, { useState, useEffect } from 'react';

const Cart = () => {
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
        .then((response) => response.json())
        .then((data) => console.log("data:", data));
    };
    if (cart.length > 0) {
        const renderCart = cart.map(item => {
        return (
            <div>
            <h3>
                {item.title} ({item.cartItem.quantity})
            </h3>
            <form onSubmit={onDeleteItem}>
                <input type='hidden' name='productId' value={item.id} />
                <button className='btn' type='submit'>
                Delete Item
                </button>
            </form>
            </div>
        );
        });
        return (
        <main className='centered'>
            <div>{renderCart}</div>
            <hr />
            <form action='/orders' type='submit' onSubmit={postOrder}>
            <button type='submit' className='btn'>
                Order Now!
            </button>
            </form>
        </main>
        );
    } else
        return (
        <div>
            <h2>No Products in Cart!</h2>
        </div>
        );
    };

export default Cart;