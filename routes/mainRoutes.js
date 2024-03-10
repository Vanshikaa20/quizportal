// routes/mainRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main.html'); // Render main.html
});

module.exports = router;
