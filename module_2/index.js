// core module
const http = require('http');
const url = require('url');

// third party module underscore
const _= require('underscore');

const PORT = 3000;

// const server = http.createServer((req, res) => {
//     var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// const result = _.pluck(stooges, 'age');

// console.log(result);

//     res.end("Hello");
//     console.log('running......')
// });


// const server = http.createServer((req, res) => {
//     if (req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('<h1>Hello World</h1>');
//         res.end();
//     }
//     else if (req.url === '/about'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.write(JSON.stringify({course:' ACC'}));
//         res.end();
//     }
//     console.log(req.url);
// })

// url parse
const server = http.createServer((req, res) => {
    const address_url = 'http://localhost:3000/about?name=Tusar&country=Bangladesh';
    const parsed_url = url.parse(address_url, true);
    const query = parsed_url.query;
    console.log(query);
})
server.listen(PORT);
console.log(`server is running at port ${PORT}`);

