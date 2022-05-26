const mysql = require('mysql2');

/**
 * @description PROD
 */
// const config = {
//   host: "localhost",
//   user: "blacqlcq_books_user",
//   password: "Di8{q3vz3myy",
//   database: "blacqlcq_books_db"
// };

/**
 * @description LOCAL
 */
const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "books_db"
};

const pool = mysql.createPool(config);

module.exports = pool;