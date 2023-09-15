// Ways to declare a variables
// var, let , const 

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName, age);

var age = 26;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollarsigns
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 25;
console.log(age);

let score;
score = 1;
console.log(score);

if(true){
    score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);

const person = {
    name: 'john'
}

person.name = 'John';
person.email = 'john@gmail.com';
console.log(person);

// Declare multiple values at once

let a, b, c;

const d =  10,
    e = 20,
    f = 30;

console.log(d, a);