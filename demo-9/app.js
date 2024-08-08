/*
Worker Threads(по умолчанию их 4, можно увеличить до 1024):
- все файловые операции fs.*
- dns.lookup
- Pipes (некоторые случаи)
- CPU Intense tasks

Системные вызовы на уровне ядра:
- TCP / UDP сервер 	и клиент
- Pipes
- DNS resole
- Child process
*/

const crypto = require('crypto');
const https = require('https');

const start = performance.now();

// process.env.UV_THREADPOOL_SIZE = 6;

// for (let i = 0; i < 50; i++) {
// 	crypto.pbkdf2('test', 'salt', 100000, 64, 'sha512', () => {
// 		console.log(performance.now() - start);
// 	});
// }

for (let i = 0; i < 50; i++) {
	https.get('https://localhost:3000', (res) => {
		res.on('data', () => {});
		res.on('end', () => {
			console.log(performance.now() - start);
		});
	});
}
