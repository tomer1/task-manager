const mongoose = require("mongoose");
const validator = require("validator");

const Task = mongoose.model("Task", {
  description: { type: String, required: true, trim: true },
  completed: {
    type: Boolean,
    default: false,    
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
