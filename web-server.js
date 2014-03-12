var util = require('util'),
    connect = require('connect'),
    port = 8000; // May not be used

util.puts('Assigned port = '+process.env.PORT);
connect.createServer(connect.static(__dirname)).listen(process.env.PORT);
util.puts('Listening on ' + process.env.PORT + '...');
util.puts('Press Ctrl + C to stop.');