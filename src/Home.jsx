import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const rooms = [
  { type: "Single Room", image: "single.jpg", description: "Perfect for solo travelers. Cozy and modern with a comfy bed, work desk, and natural lighting — all you need for a restful stay."},
  { type: "Double Room", image: "double.jpg", description: "Great for couples or friends. Enjoy two spacious beds, a cozy sitting area, and all the amenities you need to unwind together." },
  { type: "Suite", image: "suite.jpeg", description: "Indulge in elegance. This spacious suite includes a living area, luxurious furnishings, and top-tier comfort for a premium experience." }
];

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Hotel</h1>
      <p>Select a room and book easily!</p>
      <div className="rooms">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={require(`./images/${room.image}`)} alt={room.type} />
            <h3>{room.type}</h3>
            <p>{room.description}</p>
            <Link to="/booking">
              <button>Book Now</button>
            </Link>
          </div>
          
        ))}
      </div>
      <br></br>
      <center><bottom><div className="about" >
      <h3>ABOUT US:</h3>
      <p>
          Welcome to our luxurious hotel where comfort meets elegance. Nestled by the serene waters
          and surrounded by beautiful architecture, we offer an unforgettable stay experience.
        </p>
        <p>
          Our rooms are designed to cater to every traveler's needs, from cozy Single Rooms to spacious Suites.
          Each room features modern amenities, comfortable furnishings, and stunning views to ensure a relaxing stay.
        </p>
        <p>
          Whether you’re here for a romantic getaway, a family vacation, or a business trip, our dedicated staff
          is committed to making your stay exceptional.
        </p>
        <p>
          Thank you for choosing us. We look forward to welcoming you and making your visit truly memorable.
        </p>
    </div></bottom></center>
    </div>
  );

}

export default Home;
