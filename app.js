var http = require('http');
//var module1 = require('./modules/randomnumber');
//var module2 = require('./modules/convert');
var module3 = require('./modules/mod3');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(module3.accountBalance);
  res.end();
}).listen(3000);

console.log('listening on port 3000');
