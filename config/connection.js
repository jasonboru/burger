const mysql = require("mysql");
var connection;

const keys = require("./keys.js");

//JAWSDB for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: keys.keys.password,
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
