// document.querySelector('h1').textContent = 'Hello World';

// window.onload = function(){
//     document.querySelector('h1').textContent = 'Hello Everyone';
//     console.log('Page loaded');
// };

// window.addEventListener('DOMContentLoaded', ()=>{
//     document.querySelector('h1').textContent = 'Hello World';    
//     console.log('DOM loaded');
// });

// console.log('Run me');

// document.querySelector('h1').innerText = 'Hello World';

window.addEventListener('resize', ()=>{
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', ()=>{
    console.log(`Scroll: ${window.scrollX} x ${window.scrollY}`);

    if(window.scrollY > 30){
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }else{
        document.body.style.background = 'white';
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', ()=>{
    console.log('window is focused');
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'blue';
    });
});

window.addEventListener('blur', ()=>{
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    });
});