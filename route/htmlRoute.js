var path = require("path")

module.exports = function(app){
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