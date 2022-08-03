import React from 'react';
import { Route, Routes } from "react-router-dom"
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';


const  App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
    </div>
  );
}

export default App;
