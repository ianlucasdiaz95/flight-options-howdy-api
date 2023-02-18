var express = require('express');
var app = express();
const fs = require('fs');
var cors = require('cors')

app.use(cors())

app.get('/sprout/example', function (req, res) {

    const data = fs.readFileSync('sprout.json');
    const response = JSON.parse(data);
    console.log('get reponse');

    res.send(response);
});
app.listen(3000, function () {
    console.log('App listening on port 3000');
});