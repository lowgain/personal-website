const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(80)

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.end();
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/pages/error-pages/404.html");
  res.status(404);
});
