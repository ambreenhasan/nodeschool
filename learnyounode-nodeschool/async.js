// Asynchronous
var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf8', function(err, fileContents) {
  if (err) throw err;
  var stringArray = fileContents.split("\n");
  var lines = stringArray.length - 1;
  console.log(lines);
});


