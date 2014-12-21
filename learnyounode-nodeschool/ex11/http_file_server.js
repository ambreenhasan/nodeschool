var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var stream = process.argv[3];

var server = http.createServer(function(req, res){
  // line added some solution, that converts content type of response for a cleaner response
  res.writeHead(200, { 'content-type': 'text/plain' })
  var src = fs.createReadStream(stream);
  src.pipe(res)
})
server.listen(Number(port))