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

/* //*ES6

function changeBoxColor(color) {
  let boxArr = Array.from(boxes);
  boxArr.forEach( element => {
    element.style.backgroundColor = color;
  });  
};

changeBoxColor('blue');

// for of and includes functions
for(const el of Array.from(boxes)) {
  if(el.className.includes('blue')) {
    continue;
  }
  else {
    el.textContent = 'I am blue now';
  }
};

//findIndex method
var ages = [2, 15, 16, 25, 11, 22]

const eightenntest = function(el) {
  el >= 18
};

let eighteenplus = ages.findIndex((el) => {return el >= 18});


console.log(eighteenplus)

// spread operator
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

//rest parameters
function checkAge(limit,...years) {
  years.forEach(el => {
    console.log(2020 - el >= limit)
  })
};

checkAge(50, 1986, 1942, 2015, 1999, 2010)

function neilPerson(firstName, lastName, age = '21', nationality = 'Malaysian') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.nationality = nationality;
}

const neil = new neilPerson('Neil', 'Sinsua');

const map1 = new Map();
map1.set(1, 'a');
map1.set(2, 'b');
map1.set(3, 'c');
map1.set(4, 'booyah');
map1.set('answer', 'trojan');

//forEach on maps
map1.forEach((value, key) => {
  console.log(`this is the key: ${key} for value: ${value}`)
})

//forOf on maps
for(let [key, value] of map1.entries()) {
  console.log(`${key} is bound to ${value}`)
}

console.log(map1.get('answer'))

class Human {
  //declare properties of class using constructor
  constructor(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }
  //add methods to class (added to prototype chain)
  calculateAge() {
    let currentYear = new Date().getFullYear();
    console.log(currentYear - this.yearOfBirth);
    return currentYear - this.yearOfBirth;
  }

  test() {
    return 'test';
  }
}

class Fighter extends Human {
  constructor(name, yearOfBirth, wins, losses) {
    //sets subclass properties to parent class properties
    super(name, yearOfBirth);
    this.wins = wins;
    this.losses = losses;
  }

  calcWinLoss() {
    if(this.losses != 0) {
      console.log(this.wins / this.losses)
      return this.wins / this.losses;
    }
    else {
      console.log(this.wins)
      return this.wins;
    }
  }
}

const jon = new Fighter('Jon', 1989, 20, 2);
console.log(jon.calcWinLoss());
console.log(jon.calculateAge()) */

//*Coding Challenge

class Parks {
  constructor(name, numTree, age, area, buildYear) {
    this.name = name;
    this.numTree = numTree;
    this.age = age;
    this.area = area;
    this.buildYear = buildYear;
  }

  calcTreeDensity() {
    return `${this.name} parks density is ${(this.numTree / this.area).toFixed(2)} trees per km2`
  }
}

class Streets {
  constructor(name, buildYear, length) {
    this.name = name;
    this.buildYear = buildYear;
    this.length = length;
  }

  calcSize() {
    let size;
    if(this.length >= 75) {
      size = 'huge'
    }
    else if(this.length >= 50 && this.length < 75) {
      size = 'big'
    }
    else if(this.length >= 25 && this.length < 50) {
      size = 'medium'
    }
    else {
      size = 'small'
    }
    return `${this.name}\'s park size is ${size}`
  }
}

const wheelPark = new Parks('Wheel Park', 600, 4, 2.7, 1980);
const andrewPark = new Parks('Andrew Park', 1200, 3, 6.7, 1999);
const muttPark = new Parks('Mutt Park', 700, 3, 1, 2014);

let parkArr = [wheelPark, andrewPark, muttPark];

const chikiStreet = new Streets('Chiki St', 1965, 67);
const lemStreet = new Streets('Lem St', 1988, 90);
const moStreet = new Streets('Mo St', 1952, 30);

let streetArr = [chikiStreet, lemStreet, moStreet];

//1. tree density of each park in town
let treedensityArr = parkArr.map( el => el.calcTreeDensity())
console.log(treedensityArr)

//2. Average age of each towns park
function calcAverageParkAge(array) {
  let sumAge = 0;
  array.forEach( el => sumAge += el.age);
  return `the average age of all parks is ${(sumAge / array.length).toFixed(1)} years old` 
}
console.log(calcAverageParkAge(parkArr))

//3. the name of the park with more than 1000 trees
function findPark1000(array = []) {
  return `the park with more than 1000 trees is ${array[array.findIndex( el => el.numTree >= 1000)].name}` 
}
console.log(findPark1000(parkArr))

//4. total and average length of streets
let sumStLen = 0
streetArr.forEach( el => sumStLen += el.length)
console.log(`the total length of all streets is ${sumStLen} km`)
console.log( `the average length of streets is ${(sumStLen / streetArr.length).toFixed(2)}`)

//5. street classification based on length
let streetSizeArr = streetArr.map( el => el.calcSize());
console.log(streetSizeArr)