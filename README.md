# NodeJS Interview

## Overview

We want to verify understanding of:

* built-in Node.JS variables
* proper test structures
* use of file IO
* understanding of promises
* code hygiene
* exception handling
* usage of npm

## Requirements

* You must use the following libraries:
  * bluebird for Promises,
  * express to build the REST api
* We recommend using:
  * knex for database (you can use sqlite as a database, but PostgreSQL would be better)
  * Mocha for testing

## Instructions

* Build a small schema, using knex migration if you are using knex, that follows those requirements:
  * An event has a name, a start and end date,
  * A user has a username and a password,
  * A company has a name, it can have several users and several events

* Design and build a REST API that returns JSON documents to:
  * create a user, an event, a company
  * get a specific event, company
  * list users, list companies and list users
  * don't forget to handle errors

