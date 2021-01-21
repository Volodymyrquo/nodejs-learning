const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static_json')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_json', 'index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  //some database call here
  res.json({ success: true });
});

app.listen(8000);
