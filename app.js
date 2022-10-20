/**
 * @author Léo Unbekandt
 */

var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  console.log("I'm in !!");
  res.render('index', {});
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
