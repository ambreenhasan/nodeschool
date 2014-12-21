var concat = require('concat-stream');

process.stdin.pipe(concat(function(body){
  var body = body.toString();
  var reversedString = body.split("").reverse().join("")
  console.log(reversedString)
}))