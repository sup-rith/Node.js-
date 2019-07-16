// pass by value, primitive types 
 
function current(b){
    b = 2;
}

var a = 1; 
current(a);
console.log(a);

// pass by reference, objects

var greet = {
    function() {
        console.log('hello');
    },
    color : 'blue'
};


// Event Emitters 
greet.color = 'green';
console.log(greet);

var Emitter = require('./emitter');

var emtr = new Emitter();
emtr.on('greet', function (){
    console.log('Hello 1');
});

emtr.on('greet', function () {
    console.log('Hello 2');
}); 

emtr.emit('greet');

// End EventEmitter 