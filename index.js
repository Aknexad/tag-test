const express = require('express');

// express server

const app = express();

// middleware

app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('server run on port 3000'));
