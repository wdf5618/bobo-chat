console.log(100);
console.log('hello world');
console.log(20, 'hell0', true);

const x = 100;

console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({name: 'john', email: 'john@gmail.com'});

console.group('simple');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green; font-weight: bold; text-transform: uppercase;';

console.log('%chello world', styles);