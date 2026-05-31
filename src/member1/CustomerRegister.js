import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  // State for all input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !gender || !location) {
      setErrorMsg("⚠️ Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, gender, location }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Registration successful!");
        navigate("/login");
      } else {
        setErrorMsg(data.message || "❌ Registration failed!");
      }
    } catch (err) {
      setErrorMsg("⚠️ Server error. Try again later!");
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2 style={styles.heading}>📝 Register</h2>

          <form onSubmit={handleRegister} style={styles.form}>
            <label style={styles.label}>👤 Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              style={styles.input}
              required
            />

            <label style={styles.label}>📧 Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />

            <label style={styles.label}>🔑 Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={styles.input}
              required
            />

            <label style={styles.label}>⚥ Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={styles.input}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">♂ Male</option>
              <option value="Female">♀ Female</option>
              <option value="Other">⚧ Other</option>
            </select>

            <label style={styles.label}>📍 Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your city"
              style={styles.input}
              required
            />

            {errorMsg && <div style={styles.errorMsg}>{errorMsg}</div>}

<button
  type="submit"
  style={styles.button}
  onMouseEnter={(e) => {
    e.target.style.background = "#1d4ed8";
    e.target.style.transform = "translateY(-2px)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "#2563eb";
    e.target.style.transform = "translateY(0)";
  }}
>
  🚀 Register Now
</button>          </form>

          <div style={styles.linksContainer}>
            <Link to="/login" style={styles.link}>🔄 Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0a0f1f, #111827, #0a0f1f)",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  },

  wrapper: {
    width: "100%",
    maxWidth: "480px"
  },

  card: {
    background: "#111827",
    padding: "40px",
    borderRadius: "18px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
    border: "1px solid #1f2937",
    textAlign: "center",
    color: "#f1f5f9",
    transition: "all 0.3s ease"
  },

  heading: {
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "700",
    color: "#60a5fa",
    letterSpacing: "1px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },

  label: {
    marginTop: "14px",
    marginBottom: "6px",
    fontWeight: "500",
    fontSize: "14px",
    color: "#94a3b8"
  },

  input: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "1px solid #374151",
    fontSize: "14px",
    outline: "none",
    backgroundColor: "#1f2937",
    color: "#f9fafb",
    transition: "0.3s"
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "25px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },

  errorMsg: {
    color: "#f87171",
    fontSize: "13px",
    marginTop: "10px"
  },

  linksContainer: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center"
  },

  link: {
    textDecoration: "none",
    color: "#60a5fa",
    fontWeight: "500",
    fontSize: "14px",
    transition: "0.3s"
  }
};
export default Register;