// ------------------------------
// dependencies
// ------------------------------
const express = require("express");
const mongoose = require("mongoose")
const app = express();

// ------------------------------
// port
// ------------------------------
const port = 3000;

// ------------------------------
// controllers
// ------------------------------
const groceriesController = require('./controllers/groceries.js')
app.use('/groceries', groceriesController)


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

// ------------------------------
// initialize mongoose
// ------------------------------
mongoose.connect('mongodb://localhost:27017/meancrud');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
