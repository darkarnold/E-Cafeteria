const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//Set static folder
app.use(express.static('public'));

//Start app from homepage
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

//Direct any requests for /home to homepage
app.get('/home', (req, rep) => {
  rep.sendFile(__dirname + '/public/home.html');
});

app.listen(port, () => {
  console.log("E-Cafeteria is running")
});