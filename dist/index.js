var express = require('express');
var fs = require('fs');

//Configuring the Express Middleware
app = express(),
http = require('http'),
httpServer = http.Server(app);

app.use(express.static(__dirname));

//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 5000;

//Set RESTful routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//Start the server
app.listen(port);
console.log("Server has booted up successfully at PORT : " + port);