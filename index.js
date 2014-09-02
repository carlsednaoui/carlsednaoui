var express = require('express')
  , app     = express()
  , PORT    = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/:file', function(req, res){
  var file = req.params.file;
  res.sendFile(__dirname + '/public/' + file + '.html');
});

app.listen(PORT);
console.log('Listening on port %d', PORT);
