import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    from: "",
    to: "",
    goods: "",
    vehicle: "",
    people: "",
    date: "",
    time: "",
    
    driverEmail: ""
  });

  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const storedDrivers =
      JSON.parse(localStorage.getItem("drivers")) || [];
    setDrivers(storedDrivers);
  }, []);

const determineVehicle = (goods, people) => {
  const p = Number(people);

  if (!goods && !p) return "";

  // Small luggage
  if (goods.includes("Small Bag")) {
    if (p <= 1) return "Delivery Bike 🏍";
    if (p <= 2) return "Scooter 🛵";
    if (p <= 4) return "Car 🚗";
  }

  // Medium goods
  if (goods.includes("Furniture")) {
    if (p <= 4) return "Car 🚗";
    if (p <= 6) return "Pickup Vehicle 🚚";
    return "Mini Truck 🚛";
  }

  // Heavy goods
  if (goods.includes("Home appliances")) {
    if (p <= 4) return "Truck 🚛";
    return "Container Truck 🚛🚛";
  }

  // If only people travelling
  if (!goods && p > 0) {
    if (p <= 4) return "Car 🚗";
    if (p <= 6) return "Pickup Vehicle 🚚";
    return "Container Truck 🚛🚛";
  }

  return "";
};

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value
    };

    if (name === "goods" || name === "people") {
      updatedForm.vehicle = determineVehicle(
        name === "goods" ? value : updatedForm.goods,
        name === "people" ? value : updatedForm.people
      );
    }

    setForm(updatedForm);
  };

  const handleSubmit = () => {
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const storedDrivers =
      JSON.parse(localStorage.getItem("drivers")) || [];

    if (!form.driverEmail) {
      alert("Please select a driver");
      return;
    }

    const selectedDriver = storedDrivers.find(
      (d) => d.email === form.driverEmail
    );

    if (selectedDriver.status === "Booked") {
      alert("Driver already booked!");
      return;
    }

    const updatedDrivers = storedDrivers.map((driver) =>
      driver.email === form.driverEmail
        ? { ...driver, status: "Booked" }
        : driver
    );

    localStorage.setItem(
      "drivers",
      JSON.stringify(updatedDrivers)
    );

    const newBooking = {
      ...form,
      driverName: selectedDriver.name,
      driverEmail: selectedDriver.email
    };

    existingBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    alert("Booking Successful!");
    navigate("/booking-history");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          📦 Smart Booking Form 🚚
        </h2>

        {/* Inputs */}
        {[
          { label: "📍 From Location", name: "from", type: "text", placeholder: "Enter pickup location" },
          { label: "🏁 To Location", name: "to", type: "text", placeholder: "Enter drop location" }
        ].map((field, index) => (
          <div key={index} style={styles.inputGroup}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={handleChange}
              style={styles.input}
              onFocus={e => e.target.style.border = "1px solid #3b82f6"}
              onBlur={e => e.target.style.border = "1px solid #374151"}
            />
          </div>
        ))}

        <div style={styles.inputGroup}>
          <label>🎒 Select Luggage</label>
          <select
            name="goods"
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Choose luggage type</option>
            <option>Small Bag 🎒</option>
            <option>Furniture 🛋</option>
            <option>Home appliances 🧊</option>
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>👥 Number of People Accompanying</label>
          <input
            type="number"
            name="people"
            placeholder="Enter number of people"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.vehicleBox}>
          🚚 Vehicle Required:
          <strong> {form.vehicle || "Not Selected Yet"}</strong>
        </div>

        <div style={styles.inputGroup}>
          <label>Select Driver</label>
          <select
            name="driverEmail"
            value={form.driverEmail}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Choose Driver</option>
            {drivers
              .filter(driver => driver.vehicle === form.vehicle)
              .map((driver, index) => (
                <option
                  key={index}
                  value={driver.email}
                  disabled={driver.status === "Booked"}
                >
                  {driver.name} ({driver.status})
                </option>
              ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>📅 Select Date</label>
          <input type="date" name="date" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>⏰ Select Time</label>
          <input type="time" name="time" onChange={handleChange} style={styles.input} />
        </div>

        <button
          onClick={handleSubmit}
          style={styles.button}
          onMouseEnter={e => {
            e.target.style.background = "#1d4ed8";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={e => {
            e.target.style.background = "#2563eb";
            e.target.style.transform = "translateY(0)";
          }}
        >
          🚀 Submit Booking
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0f172a, #111827, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  card: {
    background: "#111827",
    padding: "35px",
    borderRadius: "16px",
    width: "430px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
    border: "1px solid #1f2937",
    color: "#f9fafb",
    transition: "0.3s"
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#60a5fa"
  },
  inputGroup: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "11px",
    borderRadius: "8px",
    border: "1px solid #374151",
    marginTop: "5px",
    background: "#1f2937",
    color: "#fff",
    outline: "none",
    transition: "0.3s"
  },
  vehicleBox: {
    background: "#1e293b",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#38bdf8",
    border: "1px solid #334155"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

export default BookingForm;