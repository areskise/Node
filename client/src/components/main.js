import React, { useState } from 'react';
import Cookies from 'universal-cookie';
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
import Login from './login';
import Signup from './signup';

function Main() {
    const cookies = new Cookies();
    const [loggedIn, setLoggedIn] = useState(cookies.get('loggedIn'));

    return(
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} cookies={cookies} />
            <Routes>
                <Route exact path='/' element={<Shop />} />
                <Route exact path='/products' element={<Product loggedIn={loggedIn}/>} />
                <Route exact path='/cart' element={<Cart loggedIn={loggedIn}/>} />
                <Route exact path='/add-product' element={<AddProduct loggedIn={loggedIn}/>} />
                <Route exact path='/admin/products' element={<AdminProduct loggedIn={loggedIn}/>} />
                <Route path='/admin/edit-product/:productId' element={<EditProduct />} />
                <Route path='/login' element={<Login setLoggedIn={setLoggedIn} cookies={cookies} />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/detail/:productId' element={<Detail loggedIn={loggedIn}/>} />
                <Route exact path='/orders' element={<Orders />} />
            </Routes>
        </div>
    );
};

export default Main;