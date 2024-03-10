// routes/teacherRoutes.js

const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Request received for /teacher');
  
    res.sendFile(path.join(__dirname, '..', 'views', 'teacher.html'), (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
    
  });

module.exports = router;
