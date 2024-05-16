const fs = require('fs');

fs.readFile('read2.md', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})