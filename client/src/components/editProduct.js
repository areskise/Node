import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    fetch(`http://localhost:5000/edit-product/${params.productId}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
        })
    .catch(err => console.log(err));
  }, [params.productId]);

  const onEditProduct = e => {

    const target = e.target;
    const updateProduct = {
      id: params.productId,
      title: target.title.value,
      imageUrl: target.imageUrl.value,
      price: target.price.value,
      description: target.description.value,
    };

    fetch(
        `http://localhost:5000/edit-product/${params.productId}`,{
            method: 'POST',
            body: JSON.stringify(updateProduct),
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        }
    )
        .then((response) => response.json())
        .then((data) => console.log("data:", data));
  };


    return (
      <main>
        <form className='product-form' action="/admin-products" onSubmit={onEditProduct}>
          <div className='form-control'>
            <label for='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              defaultValue={product.title}
            />
          </div>
          <div className='form-control'>
            <label for='imageUrl'>Image URL</label>
            <input
              type='text'
              name='imageUrl'
              id='imageUrl'
              defaultValue={product.imageUrl}
            />
          </div>
          <div className='form-control'>
            <label for='price'>Price</label>
            <input
              type='number'
              name='price'
              id='price'
              step='0.01'
              defaultValue={product.price}
            />
          </div>
          <div className='form-control'>
            <label for='description'>Description</label>
            <textarea
              name='description'
              id='description'
              rows='5'
              defaultValue={product.description}
            ></textarea>
          </div>
          <input type='hidden' name='productId' />
          <button className='btn' type='submit'>
            Update Product
          </button>
        </form>
      </main>
    );
};

export default EditProduct;