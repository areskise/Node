import "./navbar.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const Navbar = ({user, setUser, login, setLogin}) => {
  const navigate = useNavigate();

  const logoutClick = async () => {
    try {
      await axios.post("/logout")
      setUser(null)
      setLogin(false)
      navigate('/');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking Website</span>
        {!login && <div className="navItems">
          <Link  to="/sign-up">
            <button  className="navButton">
              SignUp
            </button>
          </Link>
          <Link  to="/login">
            <button  className="navButton">
              Login
            </button>
          </Link>
        </div>}
        {login && <div className="navItems">
          <span>{user.email}</span>
          <Link  to="/transactions">
            <button  className="navButton">
              Transactions
            </button>
          </Link>
          <button  className="navButton" onClick={() => logoutClick()}>
            Logout
          </button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
