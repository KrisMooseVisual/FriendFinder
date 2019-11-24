//DATA LOAD
var friendInfo = require("../data/friends.js");


//MODULE FOR EXPORTS
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendInfo);
  });

  app.post("/api/clear", function(req, res) {
    //REMOVING ARRAY DATA
    friendInfo.length = 0;
    res.json({ ok: true });
  });
};
