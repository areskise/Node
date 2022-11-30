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

    if (orders.length > 0) {
        const listOrder = orders.map(order => {
            return (
            <div key={order.id}>
                <h1># {order.id}</h1>
                {order.products.map(product => {
                return (
                    <h2 key={product.id}>
                    {product.title}({product.orderItem.quantity})
                    </h2>
                );
                })}
            </div>
            );
        });

        return (
            <main className='centered'>
            <div>{listOrder}</div>
            </main>
        );
    } else {
        return (
            <div>
            <h2>Nothing there!</h2>
            </div>
        );
    }
}

export default Orders;