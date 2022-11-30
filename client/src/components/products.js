import React, { useState, useEffect } from 'react';
import AddToCart from './addToCart';

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => { 
        fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const productList = () => {
        if(products.length > 0) {
            
            return(
                <div class="grid">
                    { products.map((product) => {
                        return(
                            <article class="card product-item">
                                <header class="card__header">
                                    <h1 class="product__title">{product.title}</h1>
                                </header>
                                <div class="card__image">
                                    <img src={product.imageUrl} alt={product.title} />
                                </div>
                                <div class="card__content">
                                    <h2 class="product__price">${product.price}</h2>
                                    <p class="product__description">{product.description}</p>
                                </div>
                                <div class="card__actions">
                                    <div class="card__button">
                                        <a href={`/products/${product.id}`} class="btn">Details</a>
                                    </div>
                                    <div class="card__button">
                                        < AddToCart product={product}/> 
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                
            );
        }
        else {
            return(
                <h1>No Products Found!</h1>
            );
        };
    };

    return(
        <div>
            <h1>Products</h1>
            {productList()}
        </div>
    );
};

export default Product;