const mysql = require('mysql2/promise');

const mySqlPool  = mysql.createPool({
    connectionLimit: 2,
    host: 'localhost',
    user : 'root',
    password: 'root',
    database: 'course_management',
    port: 3306
});

module.exports = mySqlPool;