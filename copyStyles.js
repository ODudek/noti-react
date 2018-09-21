const fs = require('fs');
const srcPath = './src';
const distPath = './dist';

function getStyleFiles () {
	fs.readdir(srcPath, (err, files) => {
		files.forEach((file) => {
			if (file.includes('.css')) {
				fs.createReadStream(`${srcPath}/${file}`).pipe(fs.createWriteStream(`${distPath}/${file}`));
				// eslint-disable-next-line no-console
				console.log(`${srcPath}/${file} -> ${distPath}/${file}`);
			}
		});
	});
}

getStyleFiles();