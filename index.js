var $RefParser = require('json-schema-ref-parser');

$RefParser.dereference("sample/apigateway/swagger.json")
    .then(function(api) {
        console.log(JSON.stringify(api, null, '\t'));
    })
    .catch(function(err) {
        console.log(err);
    });
