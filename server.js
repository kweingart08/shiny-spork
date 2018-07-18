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
// middleware
// ------------------------------
app.use(express.json())

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
mongoose.connect('mongodb://localhost:27017/groceries', {useNewUrlParser: true});
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});
