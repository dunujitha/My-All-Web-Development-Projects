const express = require('express');

const app = express();


app.get('/',function(req, res){
    res.statusCode = 200;
    res.end('<h1>' + new Date().toISOString() + '</h1>');
})


app.get('/current', function(req, res){
  res.statusCode = 200;
  res.end('<h1>Hi </h1>');
})


app.get('/store-user', function(req, res){
    res.send('<form action="/store-user" method="POST"><lable>Your Name</lable><input type="text" name="username"><button>Submit</button>')
})



// function haddleRequest(req, res) {

//   if(req.url === '/currenttime'){ 
//   res.statusCode = 200;
//   res.end('<h1>' + new Date().toISOString() + '</h1>');
//   }
//   else if (req.url === '/'){
  
//   res.statusCode = 200;
//   res.end(
//     "<h1>Hello Dunujith Gunawardana. You must beleive your self to do this job. I know you can do this. Never give up </h1>"
//   );

//   }


// }


//  const server = http.createServer(haddleRequest);

app.listen(3000);
