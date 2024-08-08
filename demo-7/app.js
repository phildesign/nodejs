/* Фазы:

- инициализация

// nextTick, microtastQueue
- таймеры
// nextTick, microtastQueue
- pending callbacks
// nextTick, microtastQueue
- idle, prepare
// nextTick, microtastQueue
- poll
// nextTick, microtastQueue
- check
// nextTick, microtastQueue
- close callbacks

- проверка на окончание
*/

const fs = require('fs');

console.log('Init');
setTimeout(() => {
	console.log(performance.now(), 'Timer 100');
}, 100);

setImmediate(() => {
	console.log('Immediate');
});

fs.readFile(__filename, () => {
	console.log('File readed');
});

setTimeout(() => {
	for (let i = 0; i < 10000000000; i++) {}
	console.log('Done');
	Promise.resolve().then(() => {
		console.log('Promise inside Timeout');
	});
	process.nextTick(() => {
		console.log('tick inside Timeout');
	});
}, 0);

Promise.resolve().then(() => {
	console.log('Promise');
});

process.nextTick(() => {
	console.log('tick');
});
console.log('Final');
