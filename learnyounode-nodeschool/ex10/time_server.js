var net = require('net');
var port = process.argv[2]

// Refactored solution

function fillTimeWithZero(i) {
  if (i < 10) {
    return ("0") + i
  } else {
    return ("") + i
  }
}

function getCurrentTime() {
  var date = new Date();
  return date.getFullYear() + "-"
  + fillTimeWithZero(date.getMonth() + 1) + "-"
  + fillTimeWithZero(date.getDate()) + " "
  + fillTimeWithZero(date.getHours()) + ":"
  + fillTimeWithZero(date.getMinutes())
}

var server = net.createServer(function(socket){
  socket.end(getCurrentTime() + '\n');
})

server.listen(Number(port))


// My Original Solution
// var server = net.createServer(function(socket){
//   console.log("Server connected.")
//   var date = new Date();
//   var time = date.getFullYear() + "-" + (1 + date.getMonth()) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
//   socket.write(time)
//   socket.on("data", function(){
//     console.log(data.toString());
//   })
//   socket.end();
// })
// server.listen(port)




// Official solution:

 // var net = require('net')

 //    function zeroFill(i) {
 //      return (i < 10 ? '0' : '') + i
 //    }

 //    function now () {
 //      var d = new Date()
 //      return d.getFullYear() + '-'
 //        + zeroFill(d.getMonth() + 1) + '-'
 //        + zeroFill(d.getDate()) + ' '
 //        + zeroFill(d.getHours()) + ':'
 //        + zeroFill(d.getMinutes())
 //    }

 //    var server = net.createServer(function (socket) {
 //      socket.end(now() + '\n')
 //    })

 //    server.listen(Number(process.argv[2]))