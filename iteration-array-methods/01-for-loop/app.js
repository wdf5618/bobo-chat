// for(initial Expression; conditional Expression; increment Expression){
//     execute code here!;
// }

// for(let i = 0; i <= 10; i++){
//     if(i === 7){
//         console.log('7 is my lucky number');
//     }else{
//         console.log('Number ' + i);
//     }
// }

// for(let i = 0; i <= 16; i++){
//     console.log('Number ' + i);

//     for(let j = 0; j <= 12; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for(let i = 0; i < names.length; i++){
    
    if(names[i] === 'John'){
        console.log(names[i] + 'is the best');
    }else{
        console.log(names[i]); 
    }
}