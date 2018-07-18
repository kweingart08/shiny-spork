// ------------------------------
// dependencies
// ------------------------------
const express = require('express')
const router = express.Router()
// ------------------------------
// routes
// ------------------------------
router.get('/', (req, res) => {
  res.send('index')
})


// ------------------------------
module.exports = router
