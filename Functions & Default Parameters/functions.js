function greetUser(name){
          console.log('Hi there!' + name);
}


greetUser('wasantha');


function greetUserq(name = 'user'){
          console.log('HI THERE' + name);
}


greetUserq();


function greetUser(greetingPrefix, userName = 'user'){
        //  console.log(greetingPrefix + ' ' + userName + '!');
        console.log(`${greetingPrefix} ${userName}!`);
}


greetUser('Hi', 'Max');
greetUser('Hello')

// function sumUp(num1 , num2, num3){
//           // return num1 + num2 + num3;
//           console.log(num1 + num2 + num3)
// }


// sumUp(1, 3, 3)



function sumUp(numbers){
  let sum = 0;
  for(const number of numbers){
          sum = sum + number;
        
  }

  return sum;
}


console.log(sumUp([1, 3, 3, 2]));



function sumUp(...numbers){
          let result = 0;

           for(const number of numbers){
                    result += number;
           }
           return result;
}

const inputNumbers = [1, 3, 3, 3];
console.log(sumUp(...inputNumbers));

