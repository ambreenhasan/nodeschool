var fs = require('fs');
var textFile = process.argv[2]

fs.createReadStream(textFile).pipe(process.stdout);

