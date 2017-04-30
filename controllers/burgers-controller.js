const express = require("express");
var burgerORM = require("../models/burger.js");

var router = express.Router();
//create routers and export them
router.get("/", function(req, res) {
    burgerORM.selectAll(function(data) {
        res.render("index", {burger:data});
 });
});

router.post("/", function(req, res) {
    burgerORM.insertOne(req.body.burger, function(result) {
        console.log(result);
        res.redirect("/");
  });
});

router.put("/:id", function(req,res) {
    burgerORM.updateOne(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
    });
})

module.exports = router;
