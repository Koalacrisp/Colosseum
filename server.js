var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// lets me use my public folder
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.send('hello');

  
})
 
app.listen(3000);



