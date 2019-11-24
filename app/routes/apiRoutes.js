//DATA LOAD
var friendsArray = require("../data/friends.js");


//MODULE FOR EXPORTS
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/clear", function(req, res) {
    //REMOVING ARRAY DATA
    friendsArray.length = 0;
    res.json({ ok: true });
  });
};
