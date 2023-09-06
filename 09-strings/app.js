let x;

const name = 'John';
const age = 26;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and Methods
const s = new String('Hello World');

x = typeof s;
x = s.length;

// Access value by key
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('H');
x = s.substring(0, 5);
x = s.substring(7);
x = s.slice(0, 5);
x = s.slice(-11, -6);

x = '             Hello World';
x = s.trim();
x = s.replace('World', 'Jerry');
x = s.includes('Hello');
x = s.valueOf();
x = s.split();
x = s.split(' ');
x = s.split('');

console.log(x);