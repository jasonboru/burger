const express = require("express");
var burgerORM = require("../models/burger.js");

var router = express.Router();
//create routers and export them
router.get("/", function(req, res) {

 burgerORM.selectAll(function(data) {

   res.render("index", {burger:data});
 });
});

module.exports = router;
