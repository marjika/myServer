var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(req, res) {
    res.end("You look great today!");
}

function handleAnother(req, res) {
    res.end("You need a haircut.");
}

var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleAnother);

serverOne.listen(PORT1, function() {
    console.log("Server listening on: http://localhost:" + PORT1);
});

serverTwo.listen(PORT2, function() {
    console.log("Server listening on http://localhost:" + PORT2);
})
