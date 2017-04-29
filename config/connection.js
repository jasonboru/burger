var mysql = require("mysql");
var connection;

//JAWSDB for Heroku deployment later?
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
