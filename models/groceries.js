const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  purchased: Boolean
})

const Groceries = mongoose.model('Grocery', grocerySchema)

module.exports = Groceries 
