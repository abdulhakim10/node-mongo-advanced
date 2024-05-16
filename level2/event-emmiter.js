const Emitter = require('events');
const myEmitter = new Emitter();

// 1st listener
myEmitter.on('birthday', () => {
    console.log('Happy Birthday To You!');
});

// 2nd listener
myEmitter.on('birthday', (gift) =>{
    console.log(`I'll give you a ${gift}`);
});

myEmitter.emit('birthday', 'Phone');