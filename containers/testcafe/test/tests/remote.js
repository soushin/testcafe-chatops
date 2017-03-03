const createTestCafe = require('testcafe');
const request        = require('request');
let runner           = null;

createTestCafe('localhost', 1337, 1338)
    .then(testcafe => {
        runner = testcafe.createRunner();
        return testcafe.createBrowserConnection();
    })
    .then(remoteConnection => {

        let headers = {
            'Content-Type': 'application/json'
        };

        let options = {
            'url':     process.env.HUBOT_WEBHOOK_CONNECTION_URL,
            'method':  'POST',
            'headers': headers,
            'json':    true,
            'form':    {'url': remoteConnection.url}
        };

        request(options, function (error, response, body) {
            console.log('sent url to hubot-webhook.');
        });

        remoteConnection.once('ready', () => {

            runner
                .src('tests/first-test.js')
                .browsers(remoteConnection)
                .reporter('custom-reporter')
                .run()
                .then(function () {
                    remoteConnection.close();
                    console.log('process exit.');
                    process.exit();
                })
                .then(failedCount => {
                    remoteConnection.close();
                    console.log(`failedCount:${failedCount}`);
                    console.log('process exit.');
                    process.exit();
                })
                .catch(function (err) {
                    remoteConnection.close();
                    console.log(`error:${err}`);
                    console.log('process exit.');
                    process.exit();
                });
        });
    });
