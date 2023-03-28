const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'jeep',
    password: '',
});

module.exports = pool.promise();