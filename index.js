var $RefParser = require('json-schema-ref-parser');

$RefParser.dereference("poc-data/parent.json")
    .then(function(api) {
        console.log(api);
    })
    .catch(function(err) {
        console.log(err);
    });
