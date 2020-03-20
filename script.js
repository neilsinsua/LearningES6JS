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

console.log(ages2);

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

const obj = {
  first: '1',
  second: '2',
  third: '3'
}

const [a, b, c, d, e] = [16, 2, 3, 4, 5];
console.log(a)
 */

//*ES65
const boxes = document.querySelectorAll('.box');


/* function changeBoxColor(color) {
  //convert node list into array
  let boxArr = Array.prototype.slice.call(boxes);
  boxArr.forEach( function(el) {
    el.style.backgroundColor = color;
  });
};

changeBoxColor('green'); */

//*ES6

function changeBoxColor(color) {
  let boxArr = Array.from(boxes);
  boxArr.forEach( element => {
    element.style.backgroundColor = color;
  });  
};

changeBoxColor('blue');

for(const el of Array.from(boxes)) {
  if(el.className.includes('blue')) {
    continue;
  }
  else {
    el.textContent = 'I am blue now';
  }
};

var ages = [2, 15, 16, 25, 11, 22]

const eightenntest = function(el) {
  el >= 18
};

let eighteenplus = ages.findIndex((el) => {return el >= 18});


console.log(eighteenplus)

function addem(a, b, c) {
  return a + b+ c;
}

const arr = [3, 3, 3];
console.log(addem(...arr));

let arr1 =[1, 2, 3];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]
console.log(arr1);


const data = ['this is a test', ...boxes];
Array.from(data);
console.log(data)

function checkAge(...years) {
  years.forEach(el => {
    console.log(2020 - el >= 18)
  })
};

checkAge(1986, 1942, 2015, 1999, 2010)