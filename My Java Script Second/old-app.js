// document.body.children[2].children[0].href = 'https://google.com';
// alert(window); 

let newAnchoreElement =  document.createElement('a');
newAnchoreElement.href = 'https://google.com';
newAnchoreElement.textContent = 'I love myself';

let firstPara = document.querySelector('p');
let accessName = firstPara.append(newAnchoreElement);


//add an element
//1.crete the new element
//2. get access to the parent element that should hold the new element
//3. Insert the new element into the parent element content.


//Remove Elements
//1. Select the element that should be removed
//2. Remove it!

let firstH1Element = document.querySelector('h1');
//firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); // older browsers

//  let firstH1Element = document.querySelector('h1');
//  firstH1Element.remove();
//  firstH1Element.parentElement.removeChild(firstH1Element); // //for older browsers

//Move Elements

firstPara.parentElement.append(firstPara);

// innerHTML
console.log(firstPara.innerHTML);

firstPara.innerHTML = 'Hi! This is <strong>important</strong>'



















