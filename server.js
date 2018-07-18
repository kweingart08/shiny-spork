// ------------------------------
// dependencies
// ------------------------------
const express = require("express");
const app = express();

// ------------------------------
// port
// ------------------------------
const port = 3000;


// ------------------------------
// route
// ------------------------------
app.get("/", (req, res) => {
  res.send("hello world")
});


// ------------------------------
// listener
// ------------------------------
app.listen(port, () => {
  console.log("I'm listening on port: ", port);
});
