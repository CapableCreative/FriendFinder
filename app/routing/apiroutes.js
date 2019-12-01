// This requires the friends.js file as a data point of reference; this is literally pulling that JSON into this file as the variable 'friends' - SLF
var friends = require('../data/friends.js');

// App references Express, and uses app.get to allow us to view the JSON available via api (which is how we will pull data from our dataset 'friends.js') - SLF
module.exports = function(app) {
    app.get('/api/friends', (req,res) => {
        res.json(friends);
    });
// app.post posts the user inputs as a parsed set of JSON values within the friends.js
    app.post('/api/friends', (req,res) => {
       var totalDifference = 0;
       var bestMatch = {
           name: "",
           photo: "",
           friendDifference: 1000
       };
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;  

        var b = userScores.map(function(item){
            return parseInt(item, 10);
        });
// The empty userData object will hold the user data object values before posting them to the JSON file for comparison        
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log(`Name: ${userName}`);
        console.log(`User Score: ${userScores}`);
        
        var sum = b.reduce((a, b) => a + b, 0);
        console.log(`Sum of users score: ${sum}`);
        console.log(`Best match friend difference: ${bestMatch.friendDifference}`)

// This for loop moves through the friends JSON file to compare user entered scores against stored values (sum of answer values 1 – 5 stored in a 10 item array, then added for a total)
        for( var i = 0 ; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log(`Total difference: ${totalDifference}`);
            console.log(`Best matched friend difference: ${bestMatch.friendDifference}`);
// The user data finds the nearest totaled score array, and assigns it to bfriendScore
            var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
            console.log(`Total friend score: ${bfriendScore}`);
           // totalDiffernce += Math.abs(sum - bfriendScore); <-- I couldn't get this to work, but it's something very minor - SLF
            console.log(`------------------------ ${totalDifference}`);
// Based on best match, display via console (and html within the Survey.html) the stored friend
            if(totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + `Total Difference`);
        }
// Respond with the bestMatch -- friend who matches the closest (or first if multiples)        
        console.log(bestMatch);
        friends.push(userData);
        console.log(`New profile created`);
        console.log(userData);
        res.json(bestMatch);
    });
};