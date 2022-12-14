import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/edit-product/${params.productId}`)
      .then((response) => response.json())
      .then((data) => {
          setProduct(data);
      })
      .catch(err => console.log(err));
  }, [params.productId]);

  const onEditProduct = e => {
    e.preventDefault();
    const target = e.target;
    const updateProduct = {
      id: params.productId,
      title: target.title.value,
      imageUrl: target.imageUrl.value,
      price: target.price.value,
      description: target.description.value,
    };

    fetch(`http://localhost:5000/edit-product/${params.productId}`,{
      method: 'POST',
      body: JSON.stringify(updateProduct),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
      .then(res => navigate('/admin/products'))
      .catch(err => console.log(err));
  };

  return (
    <form className='product-form' onSubmit={onEditProduct}>
      <div className='form-control'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          defaultValue={product.title}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='imageUrl'>Image URL</label>
        <input
          type='text'
          name='imageUrl'
          id='imageUrl'
          defaultValue={product.imageUrl}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='price'>Price</label>
        <input
          type='number'
          name='price'
          id='price'
          step='0.01'
          defaultValue={product.price}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='description'>Description</label>
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
  );
};

export default EditProduct;