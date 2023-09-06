console.log(window);
console.log(window.document);
console.log(document.body.innerHTML);

// document.body.innerHTML = '<a href="www.google.com">This is link</a> <br/>';
// console.log(document.links[0]);

// document.write('Hello World');
// document.write('<h1>Hello from js</h1>');


console.log(document.getElementById('main'));

const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';