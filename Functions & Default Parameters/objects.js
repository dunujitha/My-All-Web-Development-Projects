const job = {
          title: 'Developer',
          location: 'New York',
          salary: 5000,
}

console.log(new Date().toISOString()); 

class Job {
     constructor(jobTitle, place, salary){
          this.title = jobTitle;
          this.location = place;
          this.salary = salary;
     }   
     
     describe(){
          console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`)
     }
}


const developer = new Job('Developer', 'Colombo', 50000);
const cook = new Job('Cook', 'Munuch', 3500);

console.log(developer);
console.log(cook);

developer.describe();
cook.describe();

// Destructing objects & arrays

// const jobs = ['developer', 'colombo0', 3999];

// const [occupation, location, slary] = jobs;
// console.log(occupation);

// Destructing objects

const jobbs = {
          title: 'carpenter',
          location: 'new jercy'
}

const {title, location} = jobbs;
console.log(title);
console.log(location);

// const {title: jtitle} = jobbs;