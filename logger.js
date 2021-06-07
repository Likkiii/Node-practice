const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { msg });
  }
}

module.exports = Logger;
