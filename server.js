const appConfig = require('./app.json');

const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || appConfig.port;

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// panggil routes
var routes = require('./routes');
routes(app);


app.listen(port, () => {
    console.log('Service NOTIF started on: ' + port)
});