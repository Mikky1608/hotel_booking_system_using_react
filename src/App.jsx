import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Booking from "./Booking";


function App() {
  return (
    <Router>
      <header className="head">
      <img class="logo" src="https://www.shutterstock.com/image-vector/burj-al-arab-dubai-june-600nw-2321475345.jpg" ></img>
      <h2 className="hedd">EL CLASSICO</h2>
      </header>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
       
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        
      </Routes>
    </Router>
  );
}

export default App;
