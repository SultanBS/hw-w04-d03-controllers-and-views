var express = require('express');
var mustache = require('mustache-express');
var app = express()
var port = 3000;

var angryBirdsPackage = require('./controllers/angryBirdsController');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(request, response){
   
    response.render('./index.html');
})


app.use('/angryBirds', angryBirdsPackage);



app.listen(port, function(){
    console.log(`app is listening on port ${port}`);
})
