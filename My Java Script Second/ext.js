// const getAllDetails = document.body.children[2].firstElementChild.href = 'https://google.com';
// console.dir(getAllDetails)


// const getAllDetails = document.getElementById('external');
// getAllDetails.href = 'https://google.com'


// const getAllDetails = document.querySelector('#external');
// getAllDetails.href = 'https://google.com'



const h1Element = document.body.children[0];
console.log(h1Element);

console.log(h1Element.parentElement);

console.log(h1Element.parentElement.children[1]);
console.log(h1Element.nextElementSibling);

const h1element = document.getElementById('honda');
console.log(h1element);


const Hilighted = document.querySelector('.highlighted');
console.log(Hilighted);

const changePara = Hilighted.textContent = 'I will never giveup this job, I will achieve this goal no matter how hard is this task';
console.log(changePara);

