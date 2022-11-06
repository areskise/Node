import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './products';
import AddProduct from './addProduct';
import Nav from './navigation';

function Main() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route exact path='/add-product' element={<AddProduct />} />
                <Route exact path='/' element={<Product />} />
            </Routes>
        </div>
    );
};

export default Main;