 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
    e.currentTarget.style.boxShadow =
      "0 25px 50px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,1)";
    e.currentTarget.style.border = "1px solid rgba(0,0,0,0.9)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.5)";
    e.currentTarget.style.border =
      "1px solid rgba(255,255,255,0.15)";
  };

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <h2 style={styles.logo}>🚛 TransMAA Transport</h2>
        <div style={styles.navRight}>
          <span style={styles.username}>👋 Welcome, Customer</span>
          <button
            style={styles.logoutBtn}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          ...styles.heroSection,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)"
        }}
      >
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>Smart Transport Booking System</h1>
          <p style={styles.heroDesc}>
            Manage bookings, track vehicles, and deliver goods faster
            with our advanced logistics platform.
          </p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
          alt="Truck"
          style={styles.heroImage}
        />
      </div>

      {/* ABOUT */}
      <div style={styles.section}>
        <h2>🌍 About TransMAA</h2>
        <p style={styles.sectionText}>
          TransMAA is a complete transport management system designed
          to simplify logistics operations. Our platform connects
          customers, drivers, and businesses in one secure system.
          We focus on fast delivery, transparency, and reliability.
        </p>
      </div>

      {/* FEATURES */}
      <div style={styles.featureContainer}>
        {[
          { title: "⚡ Fast Booking", desc: "Book your vehicle in less than 2 minutes." },
          { title: "🔒 Secure Login", desc: "Protected system with safe data storage." },
          { title: "📍 Live Tracking", desc: "Track your delivery in real-time." },
          { title: "📊 Booking History", desc: "View and manage all previous bookings easily." }
        ].map((item, index) => (
          <div
            key={index}
            style={styles.glassCard}
            onMouseOver={handleHover}
            onMouseOut={handleLeave}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* VEHICLES */}
      <div style={styles.section}>
        <h2>🚚 Our Vehicles</h2>

        <div style={styles.vehicleContainer}>
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
              name: "Mini Truck",
              desc: "Perfect for small goods and city delivery."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
              name: "Container Truck",
              desc: "Best for heavy and long-distance transport."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
              name: "Pickup Vehicle",
              desc: "Suitable for medium goods transport."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
              name: "Delivery Bike",
              desc: "Fast delivery for small parcels and documents."
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png",
              name: "Scooter Service",
              desc: "Quick urban delivery for short distances."
            }
          ].map((vehicle, index) => (
            <div
              key={index}
              style={styles.glassCard}
              onMouseOver={handleHover}
              onMouseOut={handleLeave}
            >
              <img src={vehicle.img} alt={vehicle.name} style={styles.vehicleImage} />
              <h3>{vehicle.name}</h3>
              <p>{vehicle.desc}</p>
            </div>
          ))}
        </div>
      </div>
      /* SERVICES */
      <div style={styles.sectionDark}>
        <h2>🚛 Our Services</h2>
        <ul style={styles.safetyList}>
          <li>✔ <strong>Local City Transport</strong> – Fast and reliable delivery within city limits.</li>
          <li>✔ <strong>Interstate Logistics</strong> – Safe transport for long-distance and bulk goods.</li>
          <li>✔ <strong>Corporate Transport Solutions</strong> – Customized logistics support for companies.</li>
          <li>✔ <strong>Express Parcel Delivery</strong> – Quick service for small parcels and documents.</li>
          <li>✔ <strong>Driver Partnership Program</strong> – Join our platform as a verified driver.</li>
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div style={styles.section}>
        <h2>🔄 How It Works</h2>
        <ul style={styles.safetyList}>
          <li>1️⃣ Create your booking using our simple booking form.</li>
          <li>2️⃣ A verified driver is assigned to your request.</li>
          <li>3️⃣ Track your vehicle in real-time through the system.</li>
          <li>4️⃣ Your goods are delivered safely and on time.</li>
        </ul>
      </div>


      {/* TESTIMONIALS */}
      <div style={styles.sectionDark}>
        <h2>💬 What Our Customers Say</h2>
        <p>
          "Very reliable service and quick response." – Ramesh K. <br />
          "Affordable pricing and smooth booking process." – Priya M. <br />
          "Highly recommended for business logistics." – Arjun S.
        </p>
      </div>

      {/* ACTION CARDS */}
      <div style={styles.cardContainer}>
        {[
          { title: "📦 Booking Form", path: "/booking-form", desc: "Create a new booking." },
          { title: "📜 Booking History", path: "/booking-history", desc: "View previous bookings." },
          { title: "🚛 Driver Application", path: "/driver-register", desc: "Apply as a driver partner." }
        ].map((card, index) => (
          <div
            key={index}
            style={styles.glassCard}
            onClick={() => navigate(card.path)}
            onMouseOver={handleHover}
            onMouseOut={handleLeave}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © 2026 TransMAA Transport System. All rights reserved.
      </div>

    </div>
  );
}

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
    padding: "18px 60px",
    backgroundColor: "rgba(17, 24, 39, 0.9)",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 6px 18px rgba(0,0,0,0.4)"
  },

  logo: { margin: 0 },
  navRight: { display: "flex", alignItems: "center", gap: "20px" },
  username: { fontWeight: "500" },

  logoutBtn: {
    padding: "8px 18px",
    background: "linear-gradient(45deg, #ef4444, #dc2626)",
    border: "none",
    borderRadius: "25px",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s"
  },

  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "80px",
    transition: "all 0.8s ease"
  },

  heroText: { maxWidth: "500px" },
  heroTitle: { fontSize: "38px", marginBottom: "20px" },
  heroDesc: { fontSize: "18px", color: "#cbd5e1" },
  heroImage: { width: "250px" },

  section: { padding: "60px 80px", textAlign: "center" },

  sectionDark: {
    padding: "60px 80px",
    textAlign: "center",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  },

  featureContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    padding: "40px"
  },

  vehicleContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "40px"
  },

  cardContainer: {
    padding: "60px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  },

  glassCard: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "18px",
    padding: "25px",
    width: "260px",
    transition: "all 0.4s ease",
    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
    cursor: "pointer"
  },

  vehicleImage: { width: "80px", marginBottom: "15px" },

  footer: {
    background: "#020617",
    padding: "30px",
    textAlign: "center",
    fontSize: "14px",
    color: "#94a3b8"
  }
};

export default Home;
