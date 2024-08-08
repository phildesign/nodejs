const EventEmmiter = require('events');

const myEmmiter = new EventEmmiter();

const logDbConnection = () => {
	console.log('DB connected');
};

myEmmiter.addListener('connected', logDbConnection);
myEmmiter.emit('connected');

myEmmiter.removeListener('connected', logDbConnection);
// myEmmiter.off('connected', logDbConnection);
// myEmmiter.removeAllListeners('connected');
myEmmiter.emit('connected');

myEmmiter.on('msg', (data) => {
	console.log(`Получил: ${data}`);
});

myEmmiter.prependListener('msg', (data) => {
	console.log(`Prepend`);
});

myEmmiter.emit('msg', 'Привет! Получи мое сообщение');

myEmmiter.once('off', () => {
	console.log('Я вызвался один раз и не больше');
});
myEmmiter.emit('off');
myEmmiter.emit('off');

console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(1);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.listenerCount('msg'));
console.log(myEmmiter.listenerCount('off'));

console.log(myEmmiter.listeners('msg'));
console.log(myEmmiter.eventNames());

myEmmiter.on('error', (err) => {
	console.log(`Произошла ошибка: ${err.message}`);
});

myEmmiter.emit('error', new Error('ERR'));

const target = new EventTarget();

const logTarget = () => {
	console.log('Connected to target');
};

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));
