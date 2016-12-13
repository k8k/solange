var notifier = require('node-notifier');
var request = require('request')

var EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN
var firstCapacity = 50

setInterval(function () {
	request('https://www.eventbriteapi.com/v3/events/30224092073/?token=' + EVENTBRITE_TOKEN, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(JSON.parse(body).capacity)
	    var capacity = JSON.parse(body).capacity
	    if (capacity !== firstCapacity) {
	    	notifier.notify({
	    		'title': 'SOLANGE!!!!',
	    		'message': 'go buy your tickets'
	    	})
	    }
	  }
	})	
}, 7000)

