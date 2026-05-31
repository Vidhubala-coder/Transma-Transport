import React from "react";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>🛠 Admin Control Panel</h1>
        <p style={styles.subtitle}>
          Platform Governance & Operational Policies
        </p>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>📜 Terms & Conditions</h2>

          <ul style={styles.list}>
            <li>✔ All users must provide genuine and verified information during registration.</li>
            <li>✔ Drivers must submit valid license, Aadhaar, and vehicle registration documents.</li>
            <li>✔ Admin reserves the right to approve, reject, or suspend any account.</li>
            <li>✔ Fake bookings or fraudulent activities will lead to permanent suspension.</li>
            <li>✔ Drivers must ensure safe handling and timely delivery of goods.</li>
            <li>✔ The platform is not responsible for delays caused by weather or traffic.</li>
            <li>✔ Goods transported must comply with legal transport regulations.</li>
            <li>✔ Users must provide correct pickup and drop locations.</li>
            <li>✔ Any misuse of the system will result in strict administrative action.</li>
            <li>✔ Admin may update policies at any time without prior notice.</li>
            <li>✔ Continued usage of this platform implies acceptance of all policies.</li>
            <li>✔ Data stored in the system is used only for operational purposes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1e293b, #000000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    color: "white",
    padding: "40px"
  },
  overlay: {
    width: "100%",
    maxWidth: "900px",
    textAlign: "center"
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
    letterSpacing: "1px"
  },
  subtitle: {
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "40px"
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(0,0,0,0.6)",
    textAlign: "left"
  },
  sectionTitle: {
    marginBottom: "25px",
    fontSize: "24px",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    paddingBottom: "10px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
    fontSize: "15px",
    color: "#e2e8f0"
  }
};
export default AdminDashboard;