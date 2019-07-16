// Created Emitter function with events array
function Emitter() {
    this.events = {};
} 

//Create On method for Emitter object
Emitter.prototype.on = function(type, listener){
    // checks if this property exists or create an new Array
    this.events[type] = this.events[type] || [];
    // Add functions to array
    this.events[type].push(listener);
}

//Create Emit method for Emitter object
Emitter.prototype.emit = function(type) {
    if (this.events[type]){
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter; 