const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];


// console.log(socials.__proto__);

// socials.forEach(function(social){
//     console.log(social);
// });

// socials.forEach((item)=>{
//     console.log(item);
// })

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Liinkedin', url: 'https://liinkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'}
];

socialObjs.forEach((item)=> console.log(item));
socialObjs.forEach((item)=> console.log(item.url));