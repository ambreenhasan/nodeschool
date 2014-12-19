var fs = require('fs');
var path = require('path')
var dirPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(dirPath, function(err, list){
  if (err) throw err;

  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === "." + fileExtension) {
      console.log(list[i])
    }
  };
})