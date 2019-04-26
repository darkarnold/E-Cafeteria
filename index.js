var express = require('express');

var app = express();
app.use(express.static('public'));


var port = process.env.PORT || 3000;
app.listen(port);

//app.set('port', process.env.PORT || 3000);
//app.listen(3000)

app.get('/home', function(req, rep){
  rep.sendFile(__dirname + '/public/home.html');
})
