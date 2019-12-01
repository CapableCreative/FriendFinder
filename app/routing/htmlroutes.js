// ===============================================================================
// DEPENDENCIES - We need to include the path package to get the correct file path for our html. This set or routes needs the Express path functionality to move users through html or other files based on the url - SLF
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 // This route leads the submit button as well as the typed url directory 'survey' to the appropriate survey html doc - SLF
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // This route catches any entry to the root. See commented out "*" route. This was my original approach to guide erroneous directory/subpages back to the home page. I changed it, as it was preventing display of the api JSON at /api/friends - SLF
  //app.get("*", function(req, res) {
  app.get('/', (req, res) =>  res.sendFile(path.join(__dirname, "../public/home.html")));
};
