// routes/teacherRoutes.js

const express = require('express');
const router = express.Router();

router.get('/teacher', (req, res) => {
  res.render('teacher.html'); // Render teacher.html
});

module.exports = router;
