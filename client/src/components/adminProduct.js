import { useState, useEffect } from "react";

function AdminProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (productId) => {
        fetch("http://localhost:5000/delete-product?id="+productId, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        })
            .then((response) => response.json())
            .then((data) => console.log("data:", data));
        console.log(productId);
    }
    const productList = () => {
        if(products.length > 0) {
            return (
                <div className="grid">
                    {products.map(product => (
                        <div className="card product-item" key={product._id}>
                            <div className="card__header">
                                <h1 className="product__title">
                                    { product.title }
                                </h1>
                            </div>
                            <div className="card__image">
                                <img src={product.imageUrl} alt={product.title}/>
                            </div>
                            <div className="card__content">
                                <h2 className="product__price">$
                                    { product.price }
                                </h2>
                                <p className="product__description">
                                    { product.description }
                                </p>
                            </div>
                            <div className="card__actions">
                                <a href={`/detail/${product._id}`} className="btn">Details</a>
                                <a href={`/admin/edit-product/${product._id}`} className="btn">Edit</a>
                                <a href="/admin/products"type="submit" className="btn" onClick={() => handleDelete(product._id)}>Delete</a>
                            </div>
                        </div>
                    ))
                    }
                </div>
            );
        }
        else {
            return(
                <h2>No Products Found!</h2>
            );
        };
    };

    return(
        <div>
            <h1>Admin Products</h1>
            {productList()}
        </div>
    );
}

export default AdminProduct;