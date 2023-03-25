const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored
const age = 32; // the value itself is stored
hobbies.push('Reading'); // the address of the array doesn't change 

console.log(hobbies);


// Primitve values: numbers, strings, booleans & more (undefined)
// Reference values: Objects


const person = {age: 32};

function getAdultYears(p){
 p.age -= 18;
 return p.age;
 // return p.age - 18;
}


console.log(getAdultYears({age: person.age})); // {...person}
console.log(person);