const Emitter = require('events');

const emitter = new Emitter();

emitter.on('messsage', (data, second, third) => {
  console.log(`first ${data}`);
  console.log(`second ${second}`);
});

const MESSAGE = process.env.message || '';

if (MESSAGE) {
  emitter.emit('messsage', MESSAGE, 123);
} else {
  emitter.emit('messsage', 'No messages');
}
