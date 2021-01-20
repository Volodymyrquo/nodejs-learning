const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
/* const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example_three.txt.gz');
 */
/* readStream.on('data', (chunk) => {
  writeStream.write(chunk);
}); */

/* readStream.pipe(writeStream); */

/* readStream.pipe(gzip).pipe(writeStream);
 */

const readStream = fs.createReadStream('./example_three.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunzip).pipe(writeStream);
