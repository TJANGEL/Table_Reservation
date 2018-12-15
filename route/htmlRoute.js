// dependencies
var path = require("path");

// routing
module.exports = function(app) {
  // GET requests
  //home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  //reservation form page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resform.html"));
  });
  //table view page
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resview.html"));
  });
};
