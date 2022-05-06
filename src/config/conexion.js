const mysql = require('mysql2');

/**
 * @description PROD
 */
// const config = {
//   host: "localhost",
//   user: "blacqlcq_userdb1test",
//   password: "dwAX9p57B@e8",
//   database: "blacqlcq_db1test"
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