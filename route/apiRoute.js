var path = require("path");

module.exports = function(app) {
    app.post("/api/", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newcustomer = req.body;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newcustomer);
      
        characters.push(newcustomer);
      
        res.json(newcustomer);
      });
};
