import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import AddToCart from './addToCart';
import { useParams } from 'react-router-dom';

function Detail() {
    const [product, setProduct] = useState([]);
    const cookies = new Cookies();
    const loggedIn = cookies.get('loggedIn');
    const params = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${params.productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch(err => console.log(err));
    }, [params.productId]);

    return (
        <main className='center'>
            <div className="card__detail">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    width='40%'
                    height='40%'
                />
                <div className="text__detail">
                    <h1> {product.title} </h1>
                    <h2> ${product.price} </h2>
                    <p> {product.description}</p>
                </div>
            </div>
            {loggedIn === 'true' &&
                <div className="card__actions">
                    < AddToCart product={product}/> 
                </div>
            }
        </main>
    );
}

export default Detail;