const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('Hello from the backend!');
});

app.listen(8000, () => {
  console.log('Backend server is running on port 8000');
});