const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('docs/giliadmin/index.html'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', function(req,res) {
    res.sendFile(path.resolve('docs/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
