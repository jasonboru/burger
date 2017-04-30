const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 3000;


app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main"}) );
app.set("view engine", "handlebars");

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static(__dirname + "/public"));
var connection = require("./config/connection.js");

var routes = require("./controllers/burgers-controller.js");

app.use("/", routes);
app.use("/:id", routes);

app.listen(PORT);
