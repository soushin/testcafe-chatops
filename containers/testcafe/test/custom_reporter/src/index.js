'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function () {
    return {
        'noColors': true,

        'currentFixture': null,

        'report': {
            'startTime':  null,
            'endTime':    null,
            'userAgents': null,
            'passed':     0,
            'total':      0,
            'skipped':    0,
            'fixtures':   [],
            'warnings':   []
        },

        reportTaskStart: function reportTaskStart (startTime, userAgents, testCount) {
            this.report.startTime = startTime;
            this.report.userAgents = userAgents;
            this.report.total = testCount;
        },

        reportFixtureStart: function reportFixtureStart (name, path) {
            this.currentFixture = { name: name, path: path, tests: [] };
            this.report.fixtures.push(this.currentFixture);
        },

        reportTestDone: function reportTestDone (name, testRunInfo) {
            var _this = this;

            var errs = testRunInfo.errs.map(function (err) {
                return _this.formatError(err);
            });

            if (testRunInfo.skipped) this.report.skipped++;

            this.currentFixture.tests.push({
                'name': name,
                'errs': errs,

                'durationMs':     testRunInfo.durationMs,
                'unstable':       testRunInfo.unstable,
                'screenshotPath': testRunInfo.screenshotPath,
                'skipped':        testRunInfo.skipped
            });
        },

        reportTaskDone: function reportTaskDone (endTime, passed, warnings) {
            var _this = this;

            this.report.passed = passed;
            this.report.endTime = endTime;
            this.report.warnings = warnings;

            var request = require('request');
            var headers = {
                'Content-Type': 'application/json'
            };

            var options = {
                'url':     process.env.HUBOT_WEBHOOK_REPORT_URL,
                'method':  'POST',
                'headers': headers,
                'json':    true,
                'form':    this.report
            };

            request(options, function (error, response, body) {
                _this.write('sent report to hubot-webhook.').newline();
                _this.write('response:').newline();
                _this.write(body).newline().newline();
            });

            this.write('completed test.').newline();
        }
    };
};

module.exports = exports['default'];
