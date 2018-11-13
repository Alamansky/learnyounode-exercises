var myFunction = require('./make-it-modular-module');

myFunction(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.map(file => console.log(file));
    }
});