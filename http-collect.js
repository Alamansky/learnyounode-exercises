var http = require('http');

var text = '';

http.get(process.argv[2],
    response => response
    .on("data", data => data ? text += data : text)
    .on("end", _ => console.log(`${text.length}\n${text}`))
    .setEncoding("utf-8"));