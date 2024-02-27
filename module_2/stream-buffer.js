const fs = require('fs');

const readstream = fs.createReadStream('./temp.md');

readstream.on('data', (chunk) => {
console.log('............/.../');
console.log(chunk);
});

readstream.on('open', () => {
    console.log('streaming is open');
})

setTimeout(() => {
    readstream.pause();
    console.log('streaming is paused');
},2000);

setTimeout(() => {
    readstream.resume();
    console.log('streaming is resumed');
},3000)