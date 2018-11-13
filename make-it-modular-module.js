var fs = require('fs');

module.exports =  function myFunction(directory, extension, callback) {

    fs.readdir(directory, 'utf-8', function(err, files) {
        if (err) {
            callback(err);
        } else {
            callback(null, files.filter(file => file.split('.')[1] == extension));
        }
        });

}