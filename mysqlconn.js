const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBASE,
});

conn.connect( err => {
  if(err) {
    console.log('MySQL Server connection error.');
    process.exit(1);
  } else {
    console.log('MySQL connection successful!');
  }
});

module.exports = conn;
