import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Transaction from "./pages/transaction/Transaction";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} login={login} setLogin={setLogin} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setUser={setUser} setLogin={setLogin}/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
