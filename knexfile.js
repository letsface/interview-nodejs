"use strict";

var env = 'development' || process.env.NODE_ENV;
var configuration = {};

// if the process was passed a environment variable
process.argv.forEach(function(value, index) {
  if (value.match(/^--env=/)) {
    env = value.split('=')[1];
  }
});

process.env.NODE_ENV = env;

// config require NODE_ENV to be set
var config = require('config');
configuration[env] = config.get('database');

module.exports = configuration;
