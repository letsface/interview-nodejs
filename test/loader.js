'use strict';

var Q = require('q');
var loader = require('../lib/loader.js');
var assert = require('assert');

describe('Loader tests', function() {
    it('accept SELECT true;', function(done) {
        assert.equal(loader.valid('SELECT true;'), true);
        done();
    });

    it('reject SELECT 1;', function(done) {
        assert.equal(loader.valid('SELECT 1;'), false);
        done();
    });

    it('reject INSERT;', function(done) {
        assert.equal(loader.valid('SELECT 1;'), false);
        done();
    });

    it('load returns a promise', function(done) {
        assert.equal(loader.load().constructor.name, 'Promise');
        done();
    });

    it('load returns an array of booleans', function(done) {
        loader.load().then(function(result) {
            assert.equal(typeof(result), 'object');
            for (var i = 0; i < result.length; i++) {
                assert.equal(typeof(result[i]), 'boolean');
            }
            done();
        })
        .fail(done)
        .done();
    });
});