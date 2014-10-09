'use strict';

var Q = require('q'),
    fs = require('fs'),
    query = require('./query');

function valid(str) {
    //First remove insignificant whitespaces
    var tokens = str.trim().split(/\s+/g);
    if (tokens.length == 2) {
        if (tokens[0] == "SELECT") {
            if (tokens[1] == "true;" || tokens[1] == "false;") {
                return true;
            }
        }
    }
    return false;
}

function load() {
    //asynchronously load data from the data/queries.sql file
    fs.readFile("./data/queries.sql", 'utf8', function(error, data) {
        var queries;
        if (error) {
            throw error;
        }
        //turn into an array (one query string per element)
        queries = data.split("\n");        
    });

}

load();

module.exports.load = load;
module.exports.valid = valid;