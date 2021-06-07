// Events module
const EventEmitter = require('events');

// Creating class (sub-classing)
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init Event
myEmitter.emit('event');
