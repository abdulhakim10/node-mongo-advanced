// core module
const http = require('http');

// third party module underscore
const _= require('underscore');

const PORT = 3000;

const server = http.createServer((req, res) => {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
const result = _.pluck(stooges, 'age');

console.log(result);

    res.end("Hello");
    console.log('running......')
});

server.listen(PORT);
console.log(`server is running at port ${PORT}`);

