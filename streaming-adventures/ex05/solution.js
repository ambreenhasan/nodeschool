var split = require("split");
var through = require("through");
var lineCount = 0

var tr = through(function(line){
  var line = line.toString();

  if (lineCount % 2 === 0) {
    console.log(line.toLowerCase());
  } else {
    console.log(line.toUpperCase());
  }
  lineCount++
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

// Official Solution

// var through = require('through');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf) {
//     var line = buf.toString();
//     this.queue(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
// });
// process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);