var http = require('http');

http.get(process.argv[2], 
    response => response
    .on("data", data => console.log(data))
    .on("error", error => console.log(error))
    .setEncoding("utf-8"));