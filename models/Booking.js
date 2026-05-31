const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  fromLocation: String,
  toLocation: String,
  goodsType: String,
  truckType: String,
  date: String,
  status: { type: String, default: "pending" },
  driverId: String
});

module.exports = mongoose.model("Booking", bookingSchema);