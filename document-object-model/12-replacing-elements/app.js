// function replaceFirstItem(){
//     const firstItem = document.querySelector('li:first-child');
    
//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';
    
//     firstItem.replaceWith(li);
// }
// replaceFirstItem();


// function replaceSecondItem(){
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Replaced Second</li>';
// }
// replaceSecondItem();

// function replaceAllItems(){
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item, index)=>{

//         if(index === 1){
//             item.innerHTML = 'Second Item';
//         }else{
//             item.innerHTML = 'Replace All';
//             // item.outerHTML = '<li>Replace All</li>';
//         }
//     });

//     lis.forEach((item, index)=> item.outerHTML = index === 0 ? '<li>First Item</li>': '<li>Replace All</li>')
// }
// replaceAllItems();

// function replaceChildHeading(){
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shopping List';
    
//     header.replaceChild(h2, h1);
// }

// replaceChildHeading();