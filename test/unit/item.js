/*jshint expr:true*/
/*global describe, it, before */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Item;

describe('Item', function(){
  before(function(done){
    connect('home-inventory-test', function(){
    Item = require('../../app/models/item');
      done();
    });
  });

  describe('constructor', function(){
    it('should create an Item object', function(){
      var couch = new Item('couch','living room','07/23/2014','1','800');
      expect(couch).to.be.ok;
      expect(couch).to.be.instanceof(Item);
      expect(couch.name).to.equal('couch');
      expect(couch.room).to.equal('living room');
      expect(couch.acquired).to.be.instanceof(Date);
      expect(couch.count).to.equal(1);
      expect(couch.count).to.be.a('number');
      expect(couch.cost).to.equal(800);
      expect(couch.cost).to.be.a('number');
    });
  });

  describe('#save', function(){
    it('should save an item to the mongo database', function(done){
      var couch = new Item('couch','living room','07/23/2014','1','800');
      couch.save(function(){
        expect(couch._id).to.be.ok;
        done();
      });
    });
  });
});