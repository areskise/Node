import {
    faUser,
    faHouse,
    faTruckFast,
    faHouseMedical,
    faDoorClosed,
    faDoorOpen,
    faBox,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../utils/axios";
import { useNavigate } from 'react-router-dom';
import './sideBar.css'

const SideBar = ({admin, setAdmin}) => {
    const navigate = useNavigate();

    const logoutClick = async () => {
      try {
        await axios.post("/logout")
        localStorage.removeItem("admin")
        setAdmin(null)
        navigate('/');
      } catch (err) {
        console.log(err)
      }
    };

  return (
    <div className="sidebar">
      <div className="center">
        {admin &&
            <ul>
            <div>
                <p className="title">MAIN</p>
                <li>
                <a href="/dashboard">
                    <FontAwesomeIcon icon={faBox} />
                    <span> Dashboard</span>
                </a>
                </li>
                <p className="title">LISTS</p>
                <li>
                <a href="/users">
                    <FontAwesomeIcon icon={faUser} />
                    <span> Users</span>
                </a>
                </li>
                <li>
                <a href="/hotels">
                    <FontAwesomeIcon icon={faHouse} />
                    <span> Hotels</span>  
                </a>
                </li>
                <li>
                <a href="/rooms">
                    <FontAwesomeIcon icon={faDoorClosed} />
                    <span> Rooms</span>
                </a>
                </li>
                <li>
                <a href="/transactions">
                    <FontAwesomeIcon icon={faTruckFast} />
                    <span> Transaction</span>
                </a>
                </li>
                <p className="title">NEW</p>
                <li>
                <a href="/addHotel">
                    <FontAwesomeIcon icon={faHouseMedical} />
                    <span> New Hotel</span>
                </a>
                </li>
                <li>
                <a href="/addRoom">
                    <FontAwesomeIcon icon={faDoorOpen} />
                    <span> New Room</span>
                </a>
                </li>
                <p className="title">USER</p>
                <li onClick={() => logoutClick()}>
                <a href="/">
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <span> Logout</span>
                </a>
                </li>
            </div>
            </ul>
        }
        {!admin &&
            <ul>
                <div>
                    <p className="title"></p>
                    <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faRightToBracket} />
                        <span> Login</span>
                    </a>
                    </li>
                </div>
            </ul>
        }
      </div>
    </div>
  )
}

export default SideBar