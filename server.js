//EXPRESS DEPENDENCIES
var express = require("express");
//PATH REQ
var path = require('path');

//EXPRESS SERVER
var app = express();
//PORT
var PORT = process.env.PORT || 8080;

//EXPRESS DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROUTING API & HTML
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
