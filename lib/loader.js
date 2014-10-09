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

function queryPromise(str) {
    return Q.nfcall(query.query, str);
}

function load() {
    //asynchronously load data from the data/queries.sql file
    //and return result as a promise
    return Q.nfcall(fs.readFile, "./data/queries.sql", 'utf8')
    .then(function(data) {
        //turn into an array (one query string per element)
        var queries = data.split("\n");   
        return queries.reduce(function(previousValue, currentValue) {
            return previousValue
            .then(function(previous) {
                return queryPromise(currentValue)
                .then(function(result) {
                    return previous.concat(result);
                });
            });
        }, Q.resolve([])); //Initialize with an empty array
    })
    .fail(function(error) {
        throw error;
    });

}

load().then(function(data) {
    console.log(data);
});

module.exports.load = load;
module.exports.valid = valid;