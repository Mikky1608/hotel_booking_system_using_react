import React, { useState } from "react";

function Booking() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    roomType: "Single",
    nights: 1,
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmation(booking);
    setBooking({
      name: "",
      email: "",
      roomType: "Single",
      nights: 1,
    });
  };

  return (
    <div className="container">
      <h1>Hotel Booking</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={booking.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={booking.email}
          onChange={handleChange}
          required
        />
        <select name="roomType" value={booking.roomType} onChange={handleChange}>
          <option value="Single">Single Room</option>
          <option value="Double">Double Room</option>
          <option value="Suite">Suite</option>
        </select>
        <input
          type="number"
          name="nights"
          min="1"
          value={booking.nights}
          onChange={handleChange}
        />
        <button type="submit">Book Now</button>
      </form>

      {confirmation && (
        <div className="confirmation">
          <h2>Booking Confirmed!</h2>
          <p><strong>Name:</strong> {confirmation.name}</p>
          <p><strong>Email:</strong> {confirmation.email}</p>
          <p><strong>Room Type:</strong> {confirmation.roomType}</p>
          <p><strong>Nights:</strong> {confirmation.nights}</p>
        </div>
      )}
    </div>
  );
}

export default Booking;
