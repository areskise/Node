import '../CSS/login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({setLoggedIn, cookies}) => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        fetch("http://localhost:5000/login", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-type': 'application/json'},
            credentials: 'same-origin'
        })
            .then(res => {
                if (res.status !== 200) {
                    return setError(res.statusText)
                }
                else {
                    cookies.set('loggedIn', true);
                    setLoggedIn(cookies.get('loggedIn'));
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleLogin} className='login-form'>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            </div>
            <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            </div>
            <button className='btn' type='submit'>
                Login
            </button>
            {error && <span className="error">{error}!</span>}
        </form>
    );
};

export default Login;