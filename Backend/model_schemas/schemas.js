const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  userName: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Username exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "Email exists"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", signUpSchema);
