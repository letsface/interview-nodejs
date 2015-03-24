# NodeJS Interview

## Overview

We want to verify understanding of:

* built-in Node.JS variables
* proper test structures
* understanding of promises
* use of SQL and schema building
* code hygiene
* exception handling
* usage of npm
* write unit tests

## Requirements

* You MUST use the following libraries:
  * Bluebird for Promises,
  * **Express.js 4** to build the REST api
  * config (http://npmjs.org/package/config)
  * **You are not allowed** to use another framework as a base (like Sailjs for instance), or tools that helps build a scaffolding.
* We recommend using:
  * knex for database connection (you can use any SQL database, MySQL, PostgreSQL, SQLite, etc)
  * Mocha for testing

## Instructions

* Build a database schema, using knex migration (if you are using knex), that follows those requirements:
  * An event has a name, a start and end date,
  * A user has a username and a password,
  * A company has a name, it can have several users and several events
  * I should be able to install that database schema on my local machine (hence the use of migration)

* Design and build a REST API that returns JSON documents in order to:
  * create a user, an event, a company
  * get a specific event
  * list companies, list events
  * don't forget to handle errors

* Don't store the password in clear, you are free to use any strategy to store the password, please detail your choice
 in ANSWER.md

* Write some tests using Mocha,

* Keep a query log, store it as you like,

* Describe an authorization system to filter access for creating and getting event. Only users of
a company can create/see event for that company. You are free to use any authorization system you
see fit. **Keep it simple, this is just a test!**. You can check authorization for every query, or authenticate and use session, use API key, whatever you want, the choice is yours! Note
 that you are not allowed to use HTTPS. Write your answer in ANSWER.md, any solution is better than no solution!
 Explain the advantages (speed of implementation, simplicity of understanding, etc) and the drawbacks.

## Tips

* Don't forget about code re-usability !
* In knex migrations, each function `up` and `down` MUST return a promise in order to work properly
* Make good use of express middleware
* Use knex seed feature to populate the database for development
* you are free to install any package you think is necessary
* it's ok to ask for help if you're stuck
* Half a solution is better than no solution!
