const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

router.post("/create", async(req,res)=>{
  const booking = new Booking(req.body);
  await booking.save();
  res.json({message:"Booking created"});
});

router.get("/", async(req,res)=>{
  const bookings = await Booking.find();
  res.json(bookings);
});

// Assign driver to booking
router.put("/assign/:id", async (req, res) => {
  const { driverId } = req.body;

  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    {
      driver: driverId,
      status: "assigned"
    },
    { new: true }
  );

  res.json(booking);
});  


module.exports = router;