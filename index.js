var notifier = require('node-notifier');
var request = require('request')

var EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN
var GET_REQUEST_URL = 'https://www.eventbriteapi.com/v3/events/30224092073/?token=' + EVENTBRITE_TOKEN
var INTERVAL = 10000 // in ms
var firstCapacity = 108

// Check and see if capacity has updated, if so send a notification repeatedly and annoyingly
setInterval(function () {
  request(GET_REQUEST_URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('current capacity', JSON.parse(body).capacity)
      var capacity = JSON.parse(body).capacity
      if (capacity !== firstCapacity) {
        notifier.notify({
          'title': 'SOLANGE!!!!',
          'message': 'Go buy your tickets, current capacity: ' + capacity,
          'sound': 'Ping'
        })
      }
    }
  })
}, INTERVAL)

