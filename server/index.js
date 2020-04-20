const express = require('express');
const app = express();
const waiting = [];

// This is nodeJS express server for possible future 2 live person game play
app.get('/', (req,res) => {
  res.send('Welcome to Battleship');
});

app.listen(3001, () => console.log('Listening to port 3001...'));
