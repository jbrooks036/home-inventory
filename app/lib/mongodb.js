'use strict';

var MongoClient = require('mongodb').MongoClient;

function connect(name, cb) {
  var url = 'mongodb://localhost/' + name; // or could get IP address if different machine
  MongoClient.connect(url, function(err, db) {
    global.mongodb = db; // "global" to Node process
    cb();
  });

}

module.exports = connect;

