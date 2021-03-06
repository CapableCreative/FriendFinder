var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use('/img',express.static(path.join(__dirname, 'app/public/img')));
app.use('/css',express.static(path.join(__dirname, 'app/public/css')));

app.use(express.static('app/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlroutes')(app);
require('./app/routing/apiroutes')(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));