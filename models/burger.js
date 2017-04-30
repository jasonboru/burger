const orm = require("../config/orm.js");

var burgerORM = {
  	selectAll : function(response){
  		orm.selectAll(function(data){
  			response(data);
  		});
  	}
}

module.exports = burgerORM;
