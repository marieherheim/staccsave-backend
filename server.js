
var express = require('express');

// åpner en sikkerhetssperre (skriv "npm install cors" i terminalen)
var cors = require('cors');

// bruker express server (skriv "npm i express" for å installere og "node server.js" for å kjøre, i terminalen)
var app = express();

var transactions = require('./data/transactions.json')

// åpner sikkerhetssperre ved bruk av cors
app.use(cors())

// sender fra datasettet transactions.json til frontend
app.get('/amount', function (req, res) {
    res.send(JSON.stringify(amount));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(`Server is running at ${host}, at ${port}.`)

})