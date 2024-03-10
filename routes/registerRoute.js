// registerRoute.js

const express = require('express');
const router = express.Router();
const path = require('path');  // Add this line
const db = require('../db');

// Display the registration form
router.get('/register', (req, res) => {
  const filePath = path.join(__dirname, '../views/register.html');
  res.sendFile(filePath);
});

// Handle user registration
router.post('/register', (req, res) => {
  const { username, password, role } = req.body;

  // Insert user data into the database
  const insertQuery = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  db.query(insertQuery, [username, password, role], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.redirect('/register');
    }

    console.log('User registered successfully');
   
    // Redirect to the appropriate dashboard based on the user's role
    console.log('User role:', role);

    // Redirect to the appropriate dashboard based on the user's role
    if (role === 'teacher') {
      console.log('Redirecting to /teacher');
      return res.redirect('/teacher');
    } else if (role === 'student') {
      console.log('Redirecting to /student');
      return res.redirect('/student');
    }
  
  
      // Add more role checks if needed
  
      // Default redirect (e.g., if the role is not defined)
      res.redirect('/');
  });
});

module.exports = router;
