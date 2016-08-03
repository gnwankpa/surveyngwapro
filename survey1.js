var express = require('express');
var app = express();

//// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function(req, res) {
//  res.send('hello world');
//});

app.use(express.static('static'));

app.listen(3000, function() {
    console.log('Server is now running');
});