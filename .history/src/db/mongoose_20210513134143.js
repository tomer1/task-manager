const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: { type: String, required: true, trim: true },
  age: {
    type: Number,
    default: 0,
    validate(val) {
      if (val < 0) {
        throw new Error("Age must be postive number ");
      }
    },
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
    min:[]
  },
});

// const Task = mongoose.model("Task", {
//   description: { type: String },
//   completed: { type: Boolean },
// });
// new Task({description: "this is task 1", completed: false}).save().then((res)=>console.log(res))
const me = new User({ name: "  Tomer  ", email: "tomer@aa.com   " });
me.save()
  .then((res) => console.log(res))
  .catch((err) => console.log("Error !", err));
