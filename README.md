# NodeJS Interview

## Overview

STEP #1

Install and run:

* get this repository to your machine
* install the dependencies
* run the tests

STEP #2

* Complete the instructions below

## Instructions

We want to verify understanding of:

* built-in Node.JS variables
* proper test structures
* use of file IO
* understanding of promises
* understanding of array methods
* code hygiene
* exception handling
* usage of npm

Create test and library based on the sample function query.

## TODO

Create lib/loader.js with two exported methods:

* load(): returns a promise to an array of processed queries
 * load file asynchronously load data from the data/queries.sql file
 * turn into an array (one query string per element)
 * transform/validate queries
 * run all queries chained, one query at a time against a promise-wrapped version of query
* valid(str): returns true if the query is valid, false otherwise

## Input data format

caller of query is responsible for validation:

These queries are valid

SELECT true;
SELECT false;
 SELECT   true;

these queries are invalid:

SELECT 1;
SELECT 0;
SELECT SELECT;
SELECT;
INSERT;

## Guidelines

Requirements (read carefully):

* You must not change or copy the content of the file lib/query.js
* You must provide automated tests, including at least one unit test that doesn't do any file access
* You must use a promises library (Q)
* You must breakdown your changes into multiple commits
* code will be validated with jshint
* tests will be run with npm test
* Do not use absolute paths (test must be runnable by others)
* Do not have any unnecessary console.log output in the final commit
* You are only allowed to use the already specified package.json dependencies and Javascript/NodeJS built-in facilities.

## Tips

* in your test, make sure to call promise fail and done methods
* fs.readFile returns a buffer, not a string
* chaining promises can be achieved with the Array.prototype.reduce method