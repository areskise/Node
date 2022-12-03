import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking Website</span>
        <div className="navItems">
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
        </div>
      </div>
    </div>
  )
}

export default Navbar
