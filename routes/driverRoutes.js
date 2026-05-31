const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, gender, location } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, email, password, gender, location });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error. Try again later!" });
  }
});

module.exports = router;