import React from 'react';

function AddProduct() {

    const handleSubmit = (event) => {

        const product = {
            title: event.target.title.value,
            imageUrl: event.target.imageUrl.value,
            price: event.target.price.value,
            description: event.target.description.value,
        };

        fetch("http://localhost:5000/add-product", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        })
        .then((response) => response.json())
        .then((data) => console.log("data:", data));
    };

    return(
        <div>
            <h1>Add Product</h1>
            <form className="product-form" action="/" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div className="form-control">
                    <label for="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue="https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg" />
                </div>
                <div className="form-control">
                    <label for="price">Price</label>
                    <input type="number" name="price" id="price" />
                </div>
                <div className="form-control">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" rows="4" />
                </div>
                <button className="btn" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;