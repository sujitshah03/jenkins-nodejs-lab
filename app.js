var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Nodejs for github test whahid is damn ass guy');
});

app.listen(process.env.PORT || 5000);

module.exports = app; 
