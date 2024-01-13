const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello Node');
});

app.get('/api/data', (req, res) => {
  res.send({
    a: 1,
    b: 2,
  });
});

app.listen(PORT, () => {
  console.log('server is running');
});
