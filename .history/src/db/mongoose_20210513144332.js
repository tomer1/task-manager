const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const me = new User({
  name: "  Tomer  ",
  email: "tomer@aa.com   ",
  password: "password",
});
me.save()
  .then((res) => console.log(res))
  .catch((err) => console.log("Error !", err));
