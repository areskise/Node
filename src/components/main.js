import React from 'react';
import { Route, Routes } from 'react-router-dom';
import User from './users';
import AddUser from './addUser';
import Nav from './navigation';

function Main() {
    return(
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<AddUser />} />
                <Route exact path='/users' element={<User />} />
            </Routes>
        </div>
    );
};

export default Main;