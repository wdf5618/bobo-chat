
(function (){
    const user = 'Max';
    console.log(user);

    const hello = ()=> console.log('Hello from the IIFE');
    hello(); 
})();

(function(name){
    console.log('Hello ' + name);
})('Shawn');

(function hello(){
    console.log('Hello');
})();