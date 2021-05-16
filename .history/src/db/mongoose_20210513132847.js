const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: { type: String },
  age: {
    type: Number,
    validate(val) {
      if (val < 0) {
        throw new Error("Age must be postive number ");
      }
    },
  },
  email: {
    type: String,
    required: true,
    validate(val) {
      
    },
  },
});

// const Task = mongoose.model("Task", {
//   description: { type: String },
//   completed: { type: Boolean },
// });
// new Task({description: "this is task 1", completed: false}).save().then((res)=>console.log(res))
const me = new User({ name: "Tomer", age: -33 });
me.save()
  .then((res) => console.log(res))
  .catch((err) => console.log("Error !", err));
