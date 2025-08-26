const fs = require('fs');

function findAndCopyFile(path, fileName) {
	const distPath = './dist';
	fs.readdir(path, (err, files) => {
		files.forEach((file) => {
			if (file.includes(fileName)) {
				fs.createReadStream(`${path}/${file}`).pipe(
					fs.createWriteStream(`${distPath}/${file}`)
				);
				// eslint-disable-next-line no-console
				console.log(`${path}/${file} -> ${distPath}/${file}`);
			}
		});
	});
}

function setup() {
	findAndCopyFile('./src', '.css');
}

setup();
