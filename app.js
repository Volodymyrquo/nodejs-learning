const fs = require('fs');

/* fs.writeFile('example.txt', 'This is new file.', (err) => {
  if (err) console.log(err);
  else {
    console.log('File successfully created !');
    fs.readFile('example.txt', 'utf8', (err, file) => {
      if (err) console.log(err);
      else console.log(file);
    });
  }
}); */
/* 
fs.rename('example.txt', 'example2.txt', (err) => {
  if (err) console.log(err);
  else console.log('File has been renamed successfully !');
});
 */
/* 
fs.appendFile('example2.txt', 'Some data being appended', (err) => {
  if (err) console.log(err);
  else console.log('File appended successfully');
}); */
fs.unlink('example2.txt', (err) => {
  if (err) console.log(err);
  else console.log('File was deleted successfully');
});
