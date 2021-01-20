const fs = require('fs');

/* fs.mkdir('tutorial', (err) => {
  if (err) console.log(err);
  else console.log('Folder has been created successfully');
}); */
/* fs.rmdir('tutorial', (err) => {
  if (err) console.log(err);
  else console.log('Folder has been deleted successfully');
}); */
/* fs.mkdir('tutorial', (err) => {
  if (err) console.log(err);
  else {
    fs.writeFile('./tutorial/example.txt', '123', (err) => {
      if (err) console.log(err);
      else console.log('File have been created successfully');
    });
  }
});
 */

/* fs.unlink('./tutorial/example.txt', (err) => {
  if (err) console.log(err);
  else {
    fs.rmdir('tutorial', (err) => {
      if (err) console.log(err);
      else console.log('successfully removed folder');
    });
  }
}); */

fs.readdir('example', (err, files) => {
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink(`./example/${file}`, (err) => {
        if (err) console.log(err);
        else console.log('successfully deleted files');
      });
    }
  }
});
