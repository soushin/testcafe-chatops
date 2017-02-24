'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({port: 8124});
server.route({
    method: 'GET',
    path:'/webhook/do-test',
    handler: function (request, reply) {
        const exec = require('child_process').exec;
        exec('/usr/local/bin/node /src/test/tests/remote.js', function(err, stdout, stderr){
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (err !== null) {
                console.log('exec error: ' + err);
            }
        });
        reply('execute.');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
