const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.get('/test', (req, res) => res.send('From a new file'));

router.post('/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.status(400).send(err));
});

router.get('/users', (req, res) => {
  User.find({})
    .then((user) => res.send(user))
    .catch((err) => res.status(500).send());
});

router.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) return res.status(404).send();
      res.send(user);
    })
    .catch((err) => res.status(500).send(err));
});

router.patch('/users/:id', async (req, res) => {
  const allowUpdates = ['name', 'email', 'password', 'age'];
  const updates = Object.keys(req.body);
  const isValidOpr = updates.every((user) => allowUpdates.includes(user));
  if (!isValidOpr) return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});
module.exports = router;
