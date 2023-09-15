// querySelectorAll();

const listItems = document.querySelectorAll('.item');

// console.log(listItems);
// console.log(listItems[0]);
// console.log(listItems[1].innerText);

// listItems.style.color = 'red'; // error (can't style nodelist)

// listItems.forEach((item, index)=>{
//     item.style.color = 'red';

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerHTML = `Oranges
//             <button class="remove-item btn-link text-red">
//                 <i class="fa-solid fa-xmark"></i>
//             </button>`;
//     }
// });

// const listItem2 = document.getElementsByClassName('item');

// console.log(listItem2);
// // console.log(listItem2[2]);
// // console.log(listItem2[2].innerText);

// const listItemsArray = Array.from(listItem2);
// console.log(listItemsArray);

// listItemsArray.forEach((item)=>{
//     console.log(item.innerText);
// });

// const listItem3 = document.getElementsByTagName('li');
// console.log(listItem3);
// console.log(listItem3[0].innerText);