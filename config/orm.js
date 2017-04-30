const connection = require("./connection.js");

var orm = {

  selectAll: function(response) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, data){
      if (err) throw err;
      response(data);
    });
  } //,

//function insertOne () {}

//function updateOne () {}

};

module.exports = orm;
