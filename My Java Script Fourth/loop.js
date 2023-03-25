const users = ['Max', 'Anna', 'Joel']

// for (const user of users){
//           console.log(user);
// }

const loggedInUsers = {
          name: 'Max',
          age: 32,
          isAdmin: true
};


for ( const LogUser in loggedInUsers){
          // console.log(loggedInUsers[LogUser]);
          console.log(loggedInUsers['name']);
}

// let isFinished = true

// while(!isFinished){
//  isFinished = confirm('Do you want to quit?') 
// }

// console.log('Done!')