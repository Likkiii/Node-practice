const Logger = require('../logger');

// Init object
const logger = new Logger();

// Event Listener
logger.on('message', (data) => console.log('Called listener: ', data));

logger.log('Hello World');
