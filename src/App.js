import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CustomerLogin from "./member1/CustomerLogin";
import CustomerRegister from "./member1/CustomerRegister";
import BookingForm from "./member1/BookingForm";
import BookingHistory from "./member1/BookingHistory";
import DriverRegister from "./member2/DriverRegister";
import DriverHistory from "./member2/DriverHistory";
import AdminDashboard from "./member3/AdminDashboard";
import Home from "./Home";
/* ================= HOME PAGE ================= */

import { useNavigate } from "react-router-dom";

import DriverList from "./DriverList";

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "Poppins, sans-serif"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#111827",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },

  logo: { margin: 0 },

  logoutBtn: {
    padding: "8px 15px",
    backgroundColor: "#ef4444",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600"
  },

  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px 80px"
  },

  heroText: {
    maxWidth: "500px"
  },

  heroTitle: {
    fontSize: "36px",
    marginBottom: "20px"
  },

  heroDesc: {
    fontSize: "18px",
    color: "#cbd5e1"
  },

  heroImage: {
    width: "260px",
    animation: "float 3s ease-in-out infinite"
  },

  cardContainer: {
    padding: "50px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  },

  card: {
    padding: "25px",
    borderRadius: "15px",
    backgroundColor: "white",
    color: "#111827",
    width: "260px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

/* ================= MAIN ROUTER ================= */

function App() {
  return (
    <Router>
      <Routes>

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth */}
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/register" element={<CustomerRegister />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-history" element={<BookingHistory />} />

        {/* Driver */}
        <Route path="/driver-register" element={<DriverRegister />} />
        <Route path="/driver-history" element={<DriverHistory />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/driver-list" element={<DriverList />} />
        <Route path="/driver-list" element={<DriverList />} />
      </Routes>
    </Router>
  );
}

export default App;