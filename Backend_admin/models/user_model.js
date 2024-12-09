const connection = require('../config/db');

const User = {
  findByEmail: (email, callback) => {
    connection.query('SELECT * FROM users WHERE email = ?', [email], callback);
  },
  findById: (id, callback) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
  }
};

module.exports = User;
