import React, { useState } from "react";

function DriverRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    vehicle: "",
    vehicleNumber: "",
    experience: "",
    licenseNumber: "",
    aadhaar: "",
      rating: "",
    licenseFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    const drivers =
      JSON.parse(localStorage.getItem("drivers")) || [];

    const newDriver = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      age: form.age,
      address: form.address,
      vehicle: form.vehicle,
      vehicleNumber: form.vehicleNumber,
      experience: form.experience,
      licenseNumber: form.licenseNumber,
      aadhaar: form.aadhaar,
      status: "Available"
    };

    drivers.push(newDriver);
    localStorage.setItem("drivers", JSON.stringify(drivers));

    alert("🚗 Driver Application Submitted Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      age: "",
      address: "",
      vehicle: "",
      vehicleNumber: "",
      experience: "",
      licenseNumber: "",
      aadhaar: "",
      licenseFile: null
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚗 Application for Driver 📝</h2>

        <div style={styles.inputGroup}>
          <label>👤 Full Name</label>
          <input name="name" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>📧 Email</label>
          <input name="email" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>📱 Phone Number</label>
          <input name="phone" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>🎂 Age</label>
          <input name="age" type="number" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>🏠 Address</label>
          <input name="address" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
  <label>🚚 Vehicle Type</label>
  <select
    name="vehicle"
    value={form.vehicle}
    onChange={handleChange}
    style={styles.input}
  >
    <option value="">Select Vehicle</option>
    <option>Delivery Bike 🏍</option>
    <option>Scooter 🛵</option>
    <option>Car 🚗</option>
    <option>Pickup Vehicle 🚚</option>
    <option>Mini Truck 🚛</option>
    <option>Truck 🚛</option>
    <option>Container Truck 🚛🚛</option>
  </select>
</div>
        <div style={styles.inputGroup}>
          <label>🔢 Vehicle Number</label>
          <input name="vehicleNumber" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>📅 Driving Experience (Years)</label>
          <input name="experience" type="number" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>🪪 Driving License Number</label>
          <input name="licenseNumber" onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label>🆔 Aadhaar / ID Number</label>
          <input name="aadhaar" onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
  <label>⭐ Driver Rating (1 to 5)</label>
  <input
    type="number"
    name="rating"
    min="1"
    max="5"
    placeholder="Enter rating"
    onChange={handleChange}
    style={styles.input}
  />
</div>

        <div style={styles.inputGroup}>
          <label>📄 Upload Driving License</label>
          <input type="file" name="licenseFile" onChange={handleChange} style={{ color: "#ccc" }} />
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          🚀 Submit Application
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },
  card: {
    background: "rgba(30, 41, 59, 0.85)",
    backdropFilter: "blur(15px)",
    padding: "35px",
    borderRadius: "20px",
    width: "480px",
    boxShadow: "0 0 40px rgba(59,130,246,0.4)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#f1f5f9",
    animation: "fadeIn 0.8s ease-in-out"
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "#38bdf8"
  },
  inputGroup: {
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px"
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    marginTop: "6px",
    background: "#0f172a",
    color: "white",
    outline: "none",
    transition: "0.3s",
    boxShadow: "inset 0 0 8px rgba(0,0,0,0.5)"
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    background: "linear-gradient(90deg, #2563eb, #38bdf8)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 0 15px rgba(56,189,248,0.6)"
  }
};

export default DriverRegister;