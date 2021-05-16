const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
});

app.post("/tasks", (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  task
    .save()
    .then((task) => res.send(task))
    .catch((err) => res.status(400).send(err));
});

app.get("/users", (req, res) => {
  User.find({})
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send());
});
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
User.findById(_id)
  .then((user) => res.send(user))
  .catch((err) => res.status(500).send());
});

app.listen(port, () => {
  console.log("server is up on port ", port);
});
