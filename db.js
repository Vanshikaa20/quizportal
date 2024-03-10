// db.js

const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123', // Replace with your actual password
    database: 'quizportal',
  });

// Use the pool for queries
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to the database');

    connection.release();
});

// Export the connection if needed
module.exports = pool;
