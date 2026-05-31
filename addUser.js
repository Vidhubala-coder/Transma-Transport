const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/transmaa")
  .then(async () => {
    console.log("MongoDB connected");

    const user = new User({ email: "test@gmail.com", password: "1234" });
    await user.save();
    console.log("Test user added!");
    process.exit();
  })
  .catch(err => console.log(err));