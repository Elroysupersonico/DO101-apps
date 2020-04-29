var express = require('express');
app = express();

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.listen(9001, function () {
  console.log('Example app listening on port 8080!');
});

