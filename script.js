/* // Let variables:
let i = 25;

for(let i = 0; i < 6; i++) {
  console.log(i)
}

// console.log(i)

// const variables:
let name = 'Neil Rogan'; 
let age = '24';
let job = 'podcmaker';

const years = [1984, 1999, 1956, 1948, 1978, 1967, 1955];


let ages2 = years.map( (element) => 
  {return (2020 - element)};
)

console.log(ages2); */

function Person(name) {
  this.name = name;
}

let friends = ['Bob', 'Jane', 'Mark'];

//**ES6
Person.prototype.myfriends6 = function(friends) {
  let arr = friends.map(el => {
    return `${this.name} is friends with ${el}`
  })
  console.log(arr);
}

let john = new Person('John');
john.myfriends6(friends);

//**ES5
Person.prototype.myfriends5 = function(friends) {
  let arr = friends.map( function(el) {
    return this.name + ' is friends with ' + el
  }.bind(this))
  console.log(arr);
}

let kim = new Person('Kim');
kim.myfriends5(friends);