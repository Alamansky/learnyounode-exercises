var http = require('http');

const urls = process.argv.filter(arg => arg.match(/^http/g));

let answer = [], counter = 0;

urls.forEach((url, index) => 

    http.get(url, 
        response => response
        .on("data", data => {
            if (!answer[index]) {
                answer[index] = new String('');
            }
            if (data) {
                answer[index] += data;
            };
        })
        .on("end", _ => {
            ++counter;
            if (counter==urls.length) {
             answer.forEach(item => console.log(item));
            }
            }
        )
        .setEncoding("utf-8")
        )

);
