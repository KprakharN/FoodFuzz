const mysql = require('mysql12');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yash4247@',
    database: 'FOODFUZZ'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

//simple query
connection.query('SELECT * FROM your_table', (error, results, fields) => {
    if (error) throw error;
    console.log('Query results:', results);
});

connection.end((err) => {
    if (err) {
        console.error('Error closing MySQL database connection: ' + err.stack);
        return;
    }
    console.log('MySQL database connection closed.');
});

