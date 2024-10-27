require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.port
app.get('/', (req, res) => {
  res.send('The server is running!');
});

// adjust the following:
app.listen(port, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
