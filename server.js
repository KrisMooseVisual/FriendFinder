//SETTING EXPRESS PACKAGE REQS
var express = require("express");
var app = express();

//SETTING
var PORT = process.env.PORT || 8080;

//SETTING EXPRESS FOR DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//ROUTER REQUIREMENTS 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//SERVER STARTER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
