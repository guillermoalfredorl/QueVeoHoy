var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "garl1003",
  database: "queveo",
});

module.exports = con;
