var http = require('http');
var fs = require('fs');
var connect = require('connect');
var express = require('express');

var app = express();
app.get('/loadAll', async(req, res) => {
    res.send("Loading all group messages")
});

const server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);

});