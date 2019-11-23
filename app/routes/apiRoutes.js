//DATA LOAD
var friendsArray = require("../data/friends.js");


//MODULE FOR EXPORTS
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {

    if (friendsArray.length < 5) {
      friendsArray.push(req.body);
      res.json(true);
    }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

 
  app.post("/api/clear", function(req, res) {
    //REMOVE ARRAY DATA
    friendsArray.length = 0;
    // waitListData.length = 0;

    res.json({ ok: true });
  });
};
