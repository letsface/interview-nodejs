'use strict';

var Q = require('q');
var query = require('../lib/query.js');
var assert = require('assert');

describe('basic tests', function() {
  it('true', function(done) {
    query.query('SELECT true;', function(err, value) {
      assert.equal(value, true);
      done();
    });
  });

  it('false', function(done) {
    query.query('SELECT false;', function(err, value) {
      assert.equal(value, false);
      done();
    });
  });

  it('more than 10 queries pending', function() {
    assert.throws(function() {
      var noOp = function(err, value) {};
      for(var i=0; i<100; i++) {
        query.query('SELECT false;', noOp);
      }
    });
    query.flush();
  });

  it('can bind to promise', function(done) {
    var queryPromise = Q.nfbind(query.query);
    queryPromise('SELECT true')
      .then(function(result) {
        assert.equal(result, true);
        done();
      })
      .fail(done)
      .done();
  });
});