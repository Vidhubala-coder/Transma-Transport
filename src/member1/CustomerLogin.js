import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.email);
        navigate("/home");
      } else {
        setErrorMsg(data.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMsg("⚠️ Server error. Try again later!");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Login</h2>

        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Email 📧</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
            placeholder="Enter your email"
          />
          <label style={styles.label}>Password 🔒</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
              placeholder="Enter your password"
            />
            <span
              style={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          {errorMsg && <div style={styles.error}>{errorMsg}</div>}

          <button type="submit" style={styles.button}>
            🚀 Login
          </button>
        </form>

        <div style={styles.links}>
          <Link to="/register" style={styles.link}>
            📝 Register
          </Link>
          <Link to="/admin" style={styles.link}>
            🏢 Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Arial"
  },

  // 🔥 Added stronger black shadow + depth
  card: {
    width: "380px",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.07)",
    backdropFilter: "blur(15px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.85)", // stronger black shadow
    border: "1px solid rgba(0,0,0,0.6)", // subtle black border
    color: "white"
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "0 4px 15px rgba(0,0,0,0.9)" // black glow effect
  },

  form: {
    display: "flex",
    flexDirection: "column"
  },

  label: {
    marginBottom: "5px",
    fontSize: "14px",
    textShadow: "0 2px 6px rgba(0,0,0,0.8)"
  },

  // 🔥 darker inset shadow
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "white",
    outline: "none",
    marginBottom: "15px",
    boxShadow: "inset 0 4px 10px rgba(0,0,0,0.9)"
  },

  passwordContainer: {
    position: "relative"
  },

  eye: {
    position: "absolute",
    right: "15px",
    top: "12px",
    cursor: "pointer",
    textShadow: "0 2px 6px rgba(0,0,0,0.8)"
  },

  // 🔥 added black depth effect
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(to right, #7c3aed, #9333ea)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.9)" // black glow shadow
  },

  error: {
    color: "#f87171",
    marginBottom: "10px",
    textShadow: "0 2px 6px rgba(0,0,0,0.9)"
  },

  links: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between"
  },

  link: {
    color: "#c084fc",
    textDecoration: "none",
    fontSize: "14px",
    textShadow: "0 2px 8px rgba(0,0,0,0.8)"
  }
};

export default Login;