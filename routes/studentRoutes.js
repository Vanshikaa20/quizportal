// routes/studentRoutes.js

const express = require('express');
const router = express.Router();

router.get('/student', (req, res) => {
  res.render('student.html'); // Render student.html
});

module.exports = router;
