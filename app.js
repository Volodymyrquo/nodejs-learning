const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(__dirname + '/static_1'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static_1' + '/index.html');
});

app.listen(8000);
