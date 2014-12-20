module.exports = function(dirPath, fileExtension, callback) {
  var fs = require('fs');
  var path = require('path')

  fs.readdir(dirPath, function(err, list){
    var results = [];
    if (err) {
      return callback(err);
    } else {
      for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === "." + fileExtension) {
          results.push(list[i])
        }
      };
    }
    callback(null, results)
  })
}