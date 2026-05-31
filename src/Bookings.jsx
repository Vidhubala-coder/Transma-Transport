import React, { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch all bookings from backend
    axios.get("http://localhost:5000/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  // Function to fetch driver details
  const viewDriver = (driverId) => {
    if (!driverId) {
      alert("Driver not assigned yet");
      return;
    }

    axios.get(`http://localhost:5000/drivers/${driverId}`)
      .then(res => {
        const d = res.data;
        alert(`Driver Name: ${d.name}\nPhone: ${d.phone}\nVehicle: ${d.vehicleNumber}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Bookings</h2>

      {bookings.length === 0 && <p>No bookings available</p>}

      {bookings.map(b => (
        <div key={b._id} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
          <p><b>From:</b> {b.fromLocation}</p>
          <p><b>To:</b> {b.toLocation}</p>
          <p><b>Goods:</b> {b.goodsType}</p>
          <p><b>Truck:</b> {b.truckType}</p>
          <p><b>Date:</b> {b.date}</p>
          <p><b>Status:</b> {b.status}</p>
          <p><b>Driver ID:</b> {b.driverId ? b.driverId : "Not assigned"}</p>
          <button onClick={() => viewDriver(b.driverId)}>View Driver</button>
        </div>
      ))}
    </div>
  );
}

export default Bookings;

