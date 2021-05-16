const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: tru,
});

const User = mongoose.model("User", {
  name: { type: String },
  age: { type: Number },
});

const me = new User({name:'Tomer',age:33});
me.save().then((res) => console.log(res)).catch((err) => console.log('Error !', err))