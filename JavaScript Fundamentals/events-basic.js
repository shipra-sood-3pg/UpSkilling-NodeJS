import EventEmiiter from "node:events";

const emitter = new EventEmiiter();

//Add an event handler
emitter.on('myButtonClicked', message => {
    console.log('');
    console.log(`Event handled: ${message}`);
    console.log('');
});

//Emit the event after a delay of 2 seconds
setTimeout(() => {
    emitter.emit('myButtonClicked', 'Handling the myButton click event');
}, 2000);