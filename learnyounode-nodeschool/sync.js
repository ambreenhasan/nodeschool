// Synchronous
Gives access to filesystem module
var fs = require('fs');

// file path is the first command line argument and returns a buffer
var lines = fs.readFileSync(process.argv[2]);

// converts the buffer to a string
var str = lines.toString();

// splits the array at a newline
var filteredString = str.split("\n")

// counts the length of the array minus 1
var lineCount = filteredString.length - 1

console.log(lineCount);