// Exercise 7
// In this challenge, write an http server that uses a through
// stream to write back
// the request stream as upper-cased response data for
// POST requests.


var http = require("http");
var through = require("through");

var port = process.argv[2];

var server = http.createServer(function(req, res){
  if (req.method === "POST") {
    req.pipe(through(function(buf){
      var buf = buf.toString().toUpperCase();
      this.queue(buf);
    })).pipe(res)
  }
});

server.listen(Number(port));