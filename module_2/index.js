// core module
const http = require('http');

// third party module underscore
const _= require('underscore');

const server = http.createServer((req, res) => {
    // res.end('hello world');
    // console.log('running......')
});

// server.listen(3000);

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
const result = _.pluck(stooges, 'age');

console.log(result);
