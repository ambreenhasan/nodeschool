var mymodule = require('./mymodule')
var dirPath = process.argv[2];
var fileExtension = process.argv[3];

mymodule(dirPath, fileExtension, function(err, data) {
  if (err) console.log(err);

  for (i in data){
    console.log(data[i])
  }
})