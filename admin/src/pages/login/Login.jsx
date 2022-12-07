import './login.css';
import React, { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

const Login = ({setAdmin}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        const user = {
            username: username,
            password: password,
        };
        try {
            await axios.post("/admin/login", user)
            .then((res) => {
                localStorage.setItem("admin", JSON.stringify(res.data))
                setAdmin(res.data)
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log(error);	
            });	
            
        } catch (err) {
            setError(true);
        };
    };

  return (
    <div className='login'>
        <div className='container'>
            <h1 className='login-title'>Login</h1>
            <div className='item'>
                <input
                type='text'
                placeholder='Username'
                id='username'
                onChange={(e) => setUsername(e.target.value)}
                className='input'
                />
            </div>
            <div className='item'>
                <input
                type='password'
                placeholder='Password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                className='input'
                />
            </div>
            <div className='item'>
                <button className='button' onClick={handleLogin}>
                    Login
                </button>
            </div>
            <div className='item'>
                {error && <span className="error">Wrong Credentials!</span>}
            </div>
        </div>
    </div>
  );
};

export default Login;