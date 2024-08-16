const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', (msg) => {
	console.log(`Полученное сообщение: ${msg}`);
});

forkProcess.on('close', (code) => {
	console.log(`Exited: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');
