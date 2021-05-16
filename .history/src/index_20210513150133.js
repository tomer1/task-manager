const express = require("express");
require("./db/mongoose");
const users = require("./models/user");
const tasks = require("./models/task");

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

app.post("/tasks", (req, res) => {
  console.log(req.body);
  const task = new tasks(req.body);
  task
    .save()
    .then((task) => res.send(task))
    .catch((err) => res.status(400).send(err));
});

app.get("/users", (req, res) => {
  User.
});
app.listen(port, () => {
  console.log("server is up on port ", port);
});
