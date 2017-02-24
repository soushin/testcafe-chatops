slack = require 'hubot-slack'

module.exports = (robot) ->

  robot.router.post '/webhook/connection/:room', (req, res) ->
    room   = req.params.room
    message   = JSON.stringify req.body
    timestamp = new Date/1000|0

    attachments = [
      {
        "color": "#36a64f",
        "pretext": "Generating Connection URL completed.",
        "title": req.body.url,
        "link": req.body.url,
        "text": "Navigate to the URL from each of the remote browsers and starting test.",
        "footer": "via TestCafe",
        "footer_icon": "https://hubot.github.com/assets/images/layout/hubot-avatar@2x.png",
        "ts": timestamp
      }
    ]

    options = { as_user: true, link_names: 1, attachments: attachments }

    client = robot.adapter.client
    client.web.chat.postMessage(room, '', options)

    res.send "OK: message: #{message}"

  robot.router.post '/webhook/report/:room', (req, res) ->
    room   = req.params.room
    message   = JSON.stringify req.body
    timestamp = new Date/1000|0

    attachments = [
      {
        "color": "#36a64f",
        "pretext": "Test completed.",
        "title": "Report",
        "text": "Test passed.",
        "fields": [
          {
            "title": "StartTime",
            "value": req.body.startTime,
            "short": false
          },
          {
            "title": "EndTime",
            "value": req.body.endTime,
            "short": false
          },
          {
            "title": "UserAgents",
            "value": JSON.stringify req.body.userAgents,
            "short": false
          },
        ],
        "footer": "via TestCafe",
        "footer_icon": "https://hubot.github.com/assets/images/layout/hubot-avatar@2x.png",
        "ts": timestamp
      }
    ]

    options = { as_user: true, link_names: 1, attachments: attachments }

    client = robot.adapter.client
    client.web.chat.postMessage(room, '', options)

    res.send "OK: message: #{message}"
