const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Server');
});

app.listen(3065, () => {
  console.log('hello server')
});