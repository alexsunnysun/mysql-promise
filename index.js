var mysql = require('mysql');

module.exports = class PromiseMysql {
    constructor(confOpts) {
        var defOpts = {
            connectionLimit: 10,
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: ''
        };

        confOpts = Object.assign(defOpts, confOpts);

        this.pool = mysql.createPool(confOpts);
    }

    query(sql, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pool.query(sql, data, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results, fields);
                }
            });
        });
    }
}