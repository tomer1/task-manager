const express = require("express");
require("./db/mongoose");
const users = require("./models/user");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new users(req.body);
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
  console.log("server is up on port ", port);
});
