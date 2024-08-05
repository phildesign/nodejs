const { stealRing, characters } = require('./characters.js');

let myChars = characters;

myChars = stealRing(myChars, 'Фродо');

for (const c of characters) {
	console.log(c);
}

const a = 0;

if (a >= 0) {
	const log = require('./log.js');
	log();
} else {
	console.log('Меньше нуля');
}
