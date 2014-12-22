var ws = require("websocket-stream");

var stream = ws('ws://localhost:8000');

stream.end("hello\n");

// solution hasn't been checked, tests are buggy in official
// exercise