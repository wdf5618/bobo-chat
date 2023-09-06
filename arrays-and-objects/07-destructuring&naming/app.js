const firstName = 'John';
const lastName = 'Doe';
const age = 26;

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }

const person = {
    firstName,
    lastName,
    age
}

// console.log(person);
// console.log(person.age);

// Destructuring 

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Max'
    }
}

// const {id, title, user} = todo;
const {id: todoId, title, user: {name}} = todo;

// console.log(id, title);
// console.log(user);
console.log(name);
console.log(todoId);

// Destructure Arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
