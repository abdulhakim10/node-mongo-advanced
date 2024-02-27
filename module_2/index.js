const events = require('events');
const eventEmitter = new events.EventEmitter();

// creating an event handler
const peraDibo = () => {
    console.log('Where are you?');
}

// assign the event handler into an event
eventEmitter.on('scream', peraDibo).peraDibo;

// fire the event
eventEmitter.emit('scream');