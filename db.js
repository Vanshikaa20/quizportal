// db.js

const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123', // Ensure that the password is a string
  database: 'quizportal',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');

  // Perform any database operations here...

  // Close the connection when done
  connection.end((endErr) => {
    if (endErr) {
      console.error('Error closing database connection: ' + endErr.stack);
      return;
    }
    console.log('Database connection closed');
  });
});

// Export the connection if needed
module.exports = connection;
