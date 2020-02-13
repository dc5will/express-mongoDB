'use strict';

const express = require('express');
const app = express();

app.listen(8000, function() {
  console.log('Express server is listening on http://localhost:8000');
})

app.get('/', (req, res) => {
  res.send('Hello there!');
})