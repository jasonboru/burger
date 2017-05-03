const mysql = require("mysql");
var connection;



//JAWSDB for Heroku deployment
if (process.env.NODE_ENV === "production") {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const keys = require("./keys.js");
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: keys.keys.password,
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
