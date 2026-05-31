const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: String,
  phone: String,
  vehicleNumber: String,
  experience: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Driver", driverSchema);