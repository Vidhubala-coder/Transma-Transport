const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Booking = require("./models/Booking");
const User = require("./models/User"); // Make sure this file exists
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/drivers", require("./routes/driverRoutes"));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/transmaa")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// POST /api/login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (password !== user.password) return res.status(400).json({ message: "Incorrect password" });
    res.status(200).json({ message: "Login successful", token: "dummy-token" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// POST /api/register
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password,gender,location } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      gender,
      location
    });

    await newUser.save();

    res.status(201).json({ message: "Registration successful" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});