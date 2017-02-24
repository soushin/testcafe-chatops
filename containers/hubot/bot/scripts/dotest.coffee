slack = require 'hubot-slack'
request = require 'request'

module.exports = (robot) ->
  robot.respond /test\s+(.+)$/, (msg) ->
    option = msg.match[1]

    request.get(process.env['TESTCAFE_WEBHOOK_URL'], (res) => {})

    msg.send 'OK, Generating Connection URL...'
