const express = require("express");
require("./db/mongoose");
const users = require("./models/users");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save().then((user) => res.send(user)).catch((err) => console.log('object');)
  
});

app.listen(port, () => {
  console.log("server is up on port ", port);
});
