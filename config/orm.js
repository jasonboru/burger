const connection = require("./connection.js");

var orm = {

  selectAll: function(response) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  },

  insertOne: function(burger, response) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    connection.query(queryString, [burger, false], function(err, data) {
      if (err) throw err;
      response(data);
    });
  }

//function insertOne () {}

//function updateOne () {}

};

module.exports = orm;
