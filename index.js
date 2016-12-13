const notifier = require('node-notifier');
const request = require('request')

const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN
let firstCapacity = 50

setInterval(function () {
	request('https://www.eventbriteapi.com/v3/events/30224092073/?token=' + EVENTBRITE_TOKEN, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(JSON.parse(body).capacity)
	    let capacity = JSON.parse(body).capacity
	    if (capacity !== firstCapacity) {
	    	notifier.notify({
	    		'title': 'SOLANGE!!!!',
	    		'message': 'go buy your tickets'
	    	})
	    }
	  }
	})	
}, 7000)

