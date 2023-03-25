// let age = 3;
// alert("Age: " + age);
//  let hobbies = [
    
//    'wasantha',
//   'pathmika',
//   'hellow'

//  ];


//  alert(hobbies[0])


// let job = {
//   title: 'Developer',
//   place: 'New York',
//   salary: 50000
// }

// alert(job.title)

// let home;

// function homecomming(wasa){
//   home = age * age;
//   waga = home * wasa;
//   return waga;
// }

// alert(homecomming(10));


///


let MYname = 'Wasantha';
let price = 2000;
let goals = [
  'I will ',
  'Do this ',
  'No matter how it hard'
];


//
// alert(MYname);
// alert(price);
// alert(goals);

let details = {
  MYname: 'Wasantha',
  price: 2000,
  goals: [
    'I will ',
    'Do this ',
    'No matter how it hard'
  ]
}

alert(details.MYname);
alert(details.price);
alert(details.goals);


alert(details.goals[1]);
let arrElement;


function getGoals(array, arrayIndex){
     arrElement = array[arrayIndex];
   
     return arrElement;

}


alert(getGoals(details.goals, 0));

