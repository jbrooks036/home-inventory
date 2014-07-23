'use strict'; 

// var request = require('request');
var cItem = global.mongodb.collection('items');   // a way to talk directly to the colln 

function Item(name, room, acquired, count, cost) {
  this.name = name;
  this.room = room;
  this.acquired = new Date(acquired);
  this.count = parseInt(count);
  this.cost = parseFloat(cost);
}

Item.prototype.save = function(cb){
  cItem.save(this, function(err, obj) {
    console.log(err);
    console.log(obj);
    cb();
  });
};

module.exports = Item;
