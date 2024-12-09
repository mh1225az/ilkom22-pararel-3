const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Gunakan localhost atau alamat IP database
  user: 'root',      // Ganti dengan user MySQL Anda
  password: 'password', // Ganti dengan password MySQL Anda
  database: 'your_database_name' // Ganti dengan nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
