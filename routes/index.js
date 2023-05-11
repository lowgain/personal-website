var express = require('express');
var router = express.Router();
var request = require('request');

require('dotenv').config();

const URL = `http://api.openweathermap.org/data/2.5/weather?q=${process.env.CITY}&units=${process.env.UNITS}&appid=${process.env.API_KEY}`;

router.get('/', (req, res) => {
  request(URL, (err, response, body) => {
    if (err) console.err(err);
    res.render('index', {
      title: 'Startpage',
      weather: JSON.parse(body)
    })
  })
});

module.exports = router;
