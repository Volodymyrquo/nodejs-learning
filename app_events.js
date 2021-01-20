const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter();

eventEmmiter.on('tutorial', (num1) => {
  console.log(num1);
});

eventEmmiter.emit('tutorial', 'Hello everyone!');

class Person extends EventEmmiter {
  constructor(name, age) {
    super();
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

let pedro = new Person('Pedro', 20);
let christina = new Person('Christina', 36);

pedro.on('name', () => {
  console.log('my name is ' + pedro.name);
});
pedro.on('age', () => {
  console.log('my age is ' + pedro.age);
});
christina.on('age', () => {
  console.log('my age is ' + christina.age);
});
christina.on('name', () => {
  console.log('my name is ' + christina.name);
});

pedro.emit('name');
pedro.emit('age');

christina.emit('name');
christina.emit('age');
