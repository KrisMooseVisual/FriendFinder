//HTML PATH
var path = require("path");
//=========================

//ROUTING INTO OTHER FILES===========================================
module.exports = function(app) {
  
  // HTML GET Requests
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //DEFAULT HOME
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
//====================================================================