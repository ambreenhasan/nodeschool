// Exercise 8
// Send an HTTP POST request to http://localhost:8000 and pipe
// process.stdin into it. Pipe the response stream to
// process.stdout.

var request = require("request");

var postRequest = request.post('http://localhost:8000');

process.stdin.pipe(postRequest).pipe(process.stdout);