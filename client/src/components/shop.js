import React, { useState, useEffect } from 'react';
import AddToCart from './addToCart';

function Shop() {
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
                <div className="grid">
                    { products.map((product) => {
                        return(
                            <article className="card product-item">
                                <header className="card__header">
                                    <h1 className="product__title">{product.title}</h1>
                                </header>
                                <div className="card__image">
                                    <img src={product.imageUrl} alt={product.title} />
                                </div>
                                <div className="card__content">
                                    <h2 className="product__price">${product.price}</h2>
                                    <p className="product__description">{product.description}</p>
                                </div>
                                <div className="card__actions">
                                    < AddToCart product={product}/>
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
            <h1>Shop</h1>
            {productList()}
        </div>
    );
};

export default Shop;