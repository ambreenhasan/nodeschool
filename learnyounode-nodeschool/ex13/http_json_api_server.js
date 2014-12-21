var http = require("http");
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });

  var parsedUrl = url.parse(req.url, true);

  if (parsedUrl.path.match(/\/api\/parsetime/)) {
     var date = new Date(parsedUrl.query.iso);

    var objTime = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    res.end(JSON.stringify(objTime));
  } else if (parsedUrl.path.match(/\/api\/unixtime/)) {
    var timestamp = Number(new Date(parsedUrl.query.iso));

    var unixTime = {"unixtime": timestamp};

    res.end(JSON.stringify(unixTime));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(Number(port));

// Official solution

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))


