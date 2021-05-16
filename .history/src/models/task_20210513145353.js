const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("Task", {
  description: { type: String, required: true, trim: true },
  completed: {
    type: Boolean,
    default: false,    
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("Email is invalid ");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, "too few letters"],
    validate(val) {
      if (val.includes("password")) {
        throw new Error('password cant contain "password" ');
      }
    },
  },
});

module.exports = Task;
