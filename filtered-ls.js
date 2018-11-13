var fs = require('fs');

fs.readdir(process.argv[2], 'utf-8', function(err, files) {
if (err) {
    console.error(err);
} else {
    files.filter(file => file.split('.')[1] == process.argv[3]).map(file => console.log(file));
}
});