const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');

const app = express();
app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 3000;

app.post('/tasks', (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  task
    .save()
    .then((task) => res.send(task))
    .catch((err) => res.status(400).send(err));
});

app.listen(port, () => {
  console.log('server is up on port ', port);
});
