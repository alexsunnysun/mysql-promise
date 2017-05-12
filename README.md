# promise-mysql
a simple promise mysql module for nodejs with mysql-module

# Example
var pMysql = require('promise-mysql');

var db = new pMysql({
    connectionLimit: 10,  // default 10
    host: '127.0.0.1',    // default 127.0.0.1
    user: 'root',         // default root
    password: '123456',   // default 123456
    database: ''          // default empty
});

db.query('select * from iyepage').then(function (data, fields) {
    if (!data.length) {
        console.log('empty');
    }

    return db.query('select * from iyemenu limit 3');
}).then(function(data){
    console.log(data);
}).catch(function (err) {
    console.log('Error: ' + err);
});
