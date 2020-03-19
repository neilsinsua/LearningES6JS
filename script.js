// Let variables:
let i = 25;

for(let i = 0; i < 6; i++) {
  console.log(i)
}

console.log(i)

// const variables:
let name = 'Neil Rogan';
let age = '24';
let job = 'podcmaker';

const years = [1984, 1999, 1956, 1948, 1978, 1967, 1955];


let ages = years.map( (element) => {
  return 2020 - element;
;})

console.log(ages)