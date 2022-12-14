import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const newUser = {
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.password_confirm.value,
        };

    fetch("http://localhost:5000/signup", {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {'Content-type': 'application/json'},
        credentials: 'same-origin'
    })
        .then(res => {
            if (res.status === 200) {
                navigate('/login');
            } else {
                setError(res.statusText);
            }
        })
        .catch(err => console.log(err));
  };

    return (
        <form onSubmit={handleSignUp} className='signup-form' noValidate>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' />
            </div>

            <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' />
            </div>
            <div className='form-control'>
            <label htmlFor='password_confirm'>Confirm Password</label>
            <input
                type='password'
                name='password_confirm'
                id='password_confirm'
            />
            </div>
            <button className='btn' type='submit'>
                Sign Up
            </button>
            {error && <span className="error">{error}!</span>}
        </form>
    );
};

export default Signup;