const express = require("express");

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
app.post("/users", (req, res) => {
  console.log(req.);
  res.send("testing");
});

app.listen(port, () => {
  console.log("server is up on port ", port);
});
