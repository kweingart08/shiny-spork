// ------------------------------
// dependencies
// ------------------------------
const express = require('express')
const router = express.Router()
const Groceries = require('../models/groceries.js')

// ------------------------------
// routes
// ------------------------------
//GET INDEX
router.get('/', (req, res) => {
  Groceries.find({}, (err, foundGroceries) => {
    res.json(foundGroceries)
  })
})
//POST CREATE
router.post('/', (req, res) => {
  Groceries.create(req.body, (err, createdGrocery) => {
    res.json(createdGrocery)
  })
})
//DELETE
router.delete('/:id', (req, res) => {
  Groceries.findByIdAndRemove(req.params.id, (err, deletedGrocery) => {
    res.json(deletedGrocery)
  })
})
//PUT EDIT
router.put('/:id', (req, res) => {
  Groceries.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedGrocery) => {
    res.json(updatedGrocery)
  })
})


// ------------------------------
module.exports = router
