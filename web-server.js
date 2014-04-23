var util = require('util'),
    connect = require('connect'),
    port = 6969; // May not be used

util.puts('Assigned port = '+port);
connect.createServer(connect.static(__dirname)).listen(port);
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');