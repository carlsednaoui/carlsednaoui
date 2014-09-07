var express = require('express');
var app     = express();
var path    = require('path');
var PORT    = 3000;


app.use(express.static(__dirname + '/public'));


app.get('/:file', function(req, res){
  var file = req.params.file;
  res.sendFile(__dirname + '/public/' + file + '.html');
});


/**
legacy tumblr route
*/

app.get('/:folder/:timestamp/:file', function(req, res){
  var folder = req.params.folder;
  var timestamp = req.params.timestamp;
  var file = req.params.file;
  res.sendFile(path.join(__dirname, 'public', folder, timestamp, file + '.html'));
});


app.listen(PORT);
console.log('Listening on port %d', PORT);
