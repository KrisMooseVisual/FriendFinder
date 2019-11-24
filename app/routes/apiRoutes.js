//DATA LOAD
var friendsArray = require("../data/friends.js");


//MODULE FOR EXPORTS
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // app.post("/api/friends", function(req, res) {
  //   //LOOP OVER FRIENDS ARRAY AND COMPARE RESPONSES
  //   var addFriend = req.body;
  //   var surveyScore = 0;
  //   var friendScore = 0;
  //   var friendMatch = {
  //     friendName: "",
  //       photo: "",
  //       surveyResponse: 99999
  //   }
 
    
    
  // });

 
  app.post("/api/clear", function(req, res) {
    //REMOVE ARRAY DATA
    friendsArray.length = 0;

    res.json({ ok: true });
  });
};
