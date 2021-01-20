const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
/* app.get('/example', (req, res) => {
  res.send('This is just an example');
});
app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`${req.params.name} : ${req.params.age}`);
}); */

app.listen(8000);
