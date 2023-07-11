const mysql = require('mysql2/promise');

const mySqlPool  = mysql.createPool({
    connectionLimit: 2,
    host: 'localhost',
    user : 'root',
    password: 'root',
    database: 'node_upskilling',
    port: 3306
});

module.exports = mySqlPool;