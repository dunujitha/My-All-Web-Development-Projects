

const fs = require('fs');
const path = require('path');
const express = require('express');


const app = express();
 
app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
 
   res.send('<form action="/store-user" method="POST"><lable>Enter Your Name</lable><input type="type" name="username"><button>Submit</button></form>');
 })


app.get('/current', function(req, res){
  res.send('<h1>' + new Date().toISOString() + '</h1>');
})

 app.post('/store-user', function(req, res){
   const username = req.body.username;
   const filePath = path.join(__dirname, 'data', 'users.json')
   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);
   existingUsers.push(username);


  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send('<h1>User name stored!<h1>')
 })


 app.get('/users', function(req, res){
          const filePath = path.join(__dirname, 'data', 'users.json') //build the path
          const fileData = fs.readFileSync(filePath);  // read the data
          const existingUsers = JSON.parse(fileData); // parse the data
          

          let responseData = '<ul>';

        for (const user of existingUsers){
           responseData += '<li>' + user +  '</li>';

        }


        responseData += '</ul>';
          


          res.send(responseData);

 })



  app.get('/amma', function(req, res){
          res.statusCode = 200;
          res.end('<h1>Hi fadsfdfasfsf</h1>');
  })




app.listen(3000);