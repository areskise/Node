import { useState, useEffect } from "react";

function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

    const orderList = () => {
        if (orders.length > 0) {
            const listOrder = orders.map(order => {
                return (
                <li key={order._id} className="orders__item">
                    <h1>Order - # {order._id}</h1>
                    {order.products.map(product => {
                    return (
                        <ul className="orders__products-item">
                            <li key={product._id} className="orders__item">
                            {product.product.title} ({product.quantity})
                            </li>
                        </ul>
                    );
                    })}
                </li>
                );
            });

            return (
                <main>
                <ul className="orders">{listOrder}</ul>
                </main>
            );
        } else {
            return (
                <div>
                <h2>Nothing there!</h2>
                </div>
            );
        }
    };

    return(
        <div>
            <h1>Orders</h1>
            {orderList()}
        </div>
    );
}

export default Orders;