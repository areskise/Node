import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './products';
import Cart from './cart';
import AddProduct from './addProduct';
import AdminProduct from './adminProduct';
import EditProduct from './editProduct';
import Nav from './navigation';
import Shop from './shop';
import Detail from './detailProduct';
import Orders from './order';

function Main() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Shop />} />
                <Route exact path='/products' element={<Product />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path='/add-product' element={<AddProduct />} />
                <Route exact path='/admin/products' element={<AdminProduct />} />
                <Route path='/admin/edit-product/:productId' element={<EditProduct />} />
                <Route path='/detail/:productId' element={<Detail />} />
                <Route exact path='/orders' element={<Orders />} />
            </Routes>
        </div>
    );
};

export default Main;