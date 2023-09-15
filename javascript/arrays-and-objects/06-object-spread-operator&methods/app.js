let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 43.23424,
            lng: -45.3443
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {obj1, obj2};
const obj4 = {...obj1, obj2};

const obj5 = {...obj1, ...obj2};
const obj6 = Object.assign({}, obj1, obj2);

x = obj3;
x = obj4;
x = obj5;
x = obj6;

const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Buy Water' },
    { id: 3, name: 'Buy Chocolate' }
];

x = todos;
x = todos[0].name;

x = Object.keys(todo);
x = todo.length;
x = Object.keys(todo).length;

x = Object.values(todo);
x = Object.entries(todo);

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('age');

console.log(x);