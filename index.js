// app.js

const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');


// Define a route for the root path
// app.get('/', (req, res) => {
    //     res.send('Hello, World!');
    //   });
    
    // Configure Express to use the 'public' directory for static files
    app.use(express.static('public'));
    
    // Configure Express to use the 'views' directory
    app.set('views', path.join(__dirname, 'views'));
    
    
    // Set the view engine to render HTML files
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);  
    
    // Use the route files
    app.use('/', mainRoutes);
    app.use('/teacher', teacherRoutes);
    app.use('/student', studentRoutes);
    
    // Define root route
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    