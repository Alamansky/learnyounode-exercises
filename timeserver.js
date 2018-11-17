var net = require('net');

var server = net.createServer(listener);

function listener(socket) {

    let date = new Date();
    let t = [date.getFullYear(), (date.getMonth() + 1), date.getDate(), date.getHours(), date.getMinutes()];

    t.forEach(int => int.length == 1 ? int = '0' + int : int);

    socket.end(`${t[0]}-${t[1]}-${t[2]} ${t[3]}:${t[4]}\n`);

};

server.listen(process.argv[2]);