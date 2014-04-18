'use strict';

var MAX_CONCURRENT_QUERIES = 10;

var queryCount = 0;

function query(queryString, cb) {
  if (queryCount > MAX_CONCURRENT_QUERIES) {
    throw new Error('Cannot have more than ' + MAX_CONCURRENT_QUERIES);
  }
  queryCount++;
  setTimeout(function() {
    queryCount--;
    cb(null, queryString.indexOf('true') !== -1);
  }, 1);
}

function flush() {
  queryCount = 0;
}

exports.query = query;
exports.flush = flush;