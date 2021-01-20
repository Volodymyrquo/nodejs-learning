const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello everyone');
});
app.get('/example', (req, res) => {
  res.send('This is just an example');
});
app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`${req.params.name} : ${req.params.age}`);
});

app.listen(3000);
