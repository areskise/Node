import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import SideBar from "./components/sideBar/SideBar";
import Login from "./pages/login/Login";
import DashBoard from "./pages/dashBoard/DashBoard";
import Users from "./pages/users/Users";
import Hotels from "./pages/hotels/Hotels";
import Rooms from "./pages/rooms/Rooms";
import Transactions from "./pages/transactions/Transactions";
import AddHotel from "./pages/addHotel/AddHotel";
import EditHotel from "./pages/editHotel/EditHotel";
import AddRoom from "./pages/addRoom/AddRoom";
import EditRoom from "./pages/editRoom/EditRoom";
import Header from "./components/header/Header";

function App() {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("admin")));

  return (
    <BrowserRouter>
      <Header/>
      <SideBar admin={admin} setAdmin={setAdmin}/>
      <Routes>
        <Route path="/" element={<Login admin={admin} setAdmin={setAdmin}/>}/>
        <Route path="/dashBoard" element={<DashBoard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/transactions" element={<Transactions/>}/>
        <Route path="/addHotel" element={<AddHotel/>}/>
        <Route path="/addRoom" element={<AddRoom/>}/>
        <Route path="/editHotel/:hotelId" element={<EditHotel/>}/>
        <Route path="/editRoom/:roomId" element={<EditRoom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
