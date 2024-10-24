// node js
// load http module
var http = require('http');

// create a server object
var server = http.createServer();

// .on() is an event listener. create listener to 'request' events. Builds a response.
server.on('request', function(req,res) {
  res.statusCode = 200;                         // status
  res.setHeader('Content-Type','text/html');    // headers
  res.write('Hello!');                          // body
  res.end();                                    // signals the server that respºonse has been sent.
  console.log('Hello sent')
})

// log when it starts listening
server.on('listening', function() {             // event that is triggered when server starts listening
  console.log('Server running and listening')
})

// start the server at por 3000
server.listen(3000);