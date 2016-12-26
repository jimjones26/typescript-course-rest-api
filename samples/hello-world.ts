const message: string = 'Hello World!';

/*
function sayHello(message: string) {
  console.log(message);
}
*/

/*
const sayHello = (message: string) => {
  console.log(message);
};
*/

/*
const sayHello = message => {
  console.log(message);
};
*/

/*
const sayHello = message => console.log(message);
*/

const sayHello = (message: string) => console.log(message);
// es5 output: var sayHello = function (message) { return console.log(message); };

sayHello(message);







/*
function Person(name: string) {
  this.name = name;
  this.sayHi = function() {
    setTimeout(function () {
      console.log('Hello, my name is ' + this.name);
    }, 1000)
  }
}
*/

function Person(name: string) {
  this.name = name;
  this.sayHi = function () {
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
    }, 1000)
  }
}

const person = new Person('Bob');

person.sayHi();







function buildPersonData({firstName, lastName, address}) {
  return firstName + ' ' + lastName + ' ' + address;
}

const personData = {
  firstName: 'Kobe',
  lastName: 'Bryant',
  address: 'Staples Center'
};

buildPersonData(personData);

