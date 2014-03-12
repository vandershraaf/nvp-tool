var util = require('util'),
    connect = require('connect'),
    port = 8111;

connect.createServer(connect.static(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');