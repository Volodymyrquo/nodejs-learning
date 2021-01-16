const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter();

eventEmmiter.on('tutorial', (num1) => {
  console.log(num1);
});

eventEmmiter.emit('tutorial', 'Hello everyone!');

class Person extends EventEmmiter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

pedro.on('name', () => {
  console.log('my name is ' + pedro.name);
});
christina.on('name', () => {
  console.log('my name is ' + christina.name);
});

pedro.emit('name');
christina.emit('name');
