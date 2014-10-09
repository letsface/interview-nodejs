var fs = require('fs');

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