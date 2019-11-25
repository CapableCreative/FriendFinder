var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlroutes')(app);
//require('./app/routing/apiroutes')(app);

app.listen(PORT, function(){
    console.log('App listening on port ' + PORT);
});