module.exports = (robot) ->
  robot.respond /who are you/i, (msg) ->
    msg.send "I'm hubot!"

  robot.hear /HELLO$/i, (msg) ->
    msg.send "hello!"

  robot.hear /PING$/i, (msg) ->
    msg.send "pong"

  robot.respond /who am I/i, (msg) ->
    msg.send "You are #{msg.message.user.name}"

  robot.respond /what is this (.*)/i, (msg) ->
    msg.send "This is #{msg.match[1]}"
