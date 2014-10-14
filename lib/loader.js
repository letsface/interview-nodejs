'use strict';

var Q = require('q'),
    fs = require('fs'),
    query = require('./query.js');

function load() {
    //asynchronously load data from the data/queries.sql file
    //and return result as a promise
    return Q.nfcall(fs.readFile, "./data/queries.sql", 'utf8')
    .then(function(data) {
        //turn into an array (one query string per element)
        var queries = data.split("\n"),
            doQuery = Q.nfbind(query.query);
        //process queries one at a time 
        return queries.reduce(function(resultArray, currentValue) {
            return resultArray
            .then(function(previousArray) {
                return checkValidity(currentValue)
                .then(doQuery)
                .then(concatenateTo(previousArray));
            });
        }, Q.resolve([])); //Initialize with (a promise to) an empty array
    });
}

function valid(str) {
    //First remove insignificant whitespaces
    var tokens = str.trim().split(/\s+/g);
    //This will match the given examples, although it is not very general
    if (tokens.length == 2) {
        if (tokens[0] == "SELECT") {
            if (tokens[1] == "true;" || tokens[1] == "false;") {
                return true;
            }
        }
    }
    return false;
}

//Returns the string as a promise if valid, otherwise throws an error
function checkValidity(str) {
    var deferred = Q.defer();
    if (valid(str)) {
        deferred.resolve(str);
    }
    else {
        deferred.reject(new Error("Invalid query: " + str));    
    }    
    return deferred.promise;
}

//Returns the concat function for a given array. 
function concatenateTo(arr) {
    return (function(val) {
        return arr.concat(val);
    });
}

module.exports.load = load;
module.exports.valid = valid;