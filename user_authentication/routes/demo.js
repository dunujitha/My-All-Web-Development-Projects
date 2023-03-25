const express = require("express");

const db = require("../data/database");

const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  let sessionInputData = req.session.inputData;
  
  if(!sessionInputData){
    sessionInputData = {
      hasError: false,
      email: '',
      confirmEmail: '',
      password: ''
    }
  }

  req.session.inputData = null;

  res.render("signup", {inputData: sessionInputData});
});

router.get("/login", function (req, res) {
  let sessionInputData = req.session.inputData;
  
  if(!sessionInputData){
    sessionInputData = {
      hasError: false,
      email: '',
      password: ''
    }
  }

  req.session.inputData = null;
  res.render("login", {inputData: sessionInputData});
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredemail = userData.email;
  const enteredconfirmEmail = userData["confirm-email"];
  const enteredpassword = userData.password;

  if (
    !enteredemail ||
    !enteredconfirmEmail ||
    !enteredpassword ||
    enteredpassword.trim() < 6 ||
    enteredemail !== enteredconfirmEmail ||
    !enteredemail.includes("@")
  ) {
     req.session.inputData = {
      hasError: true,
      message: 'Invalid input - please check your data',
      email: enteredemail,
      confirmEmail: enteredconfirmEmail,
      password: enteredpassword
     }
     req.session.save(function(){
      return res.redirect('/signup');
     });

     return;
    

    
  }


  const existingUser =await db.getDb().collection('users').findOne({email: enteredemail});

  if(existingUser){
    req.session.inputData = {
      hasError: true,
      message: 'User exists already',
      email: enteredemail,
      confirmEmail: enteredconfirmEmail,
      password: enteredpassword
     }
     req.session.save(function(){
      return res.redirect('/signup');
     })
     return;
   
  }

  const hashedPassword = await bcrypt.hash(enteredpassword, 12);

  const user = {
    email: enteredemail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect('/login');
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredemail = userData.email;
  const enteredpassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredemail });

  if (!existingUser) {
    req.session.inputData = {
      hasError: true,
      message: 'Could not log you in - please check your credentials!',
      email: enteredemail,
      password: enteredpassword
     }
     req.session.save(function(){
      return res.redirect("/login");
     })
    
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredpassword,
    existingUser.password
  );

  if (!passwordsAreEqual) {
    req.session.inputData = { //////////
      hasError: true,
      message: 'User exists already',
      email: enteredemail,
      confirmEmail: enteredconfirmEmail,
      password: enteredpassword
     }
     req.session.save(function(){
      return res.redirect("/login");
     })
   
  }

  req.session.user = {id : existingUser._id, email: existingUser.email};
  req.session.isAuthenticated = true;
  req.session.save(function(){
    res.redirect("/profile");
  });

  
});

router.get("/admin",async function (req, res) {
  if(!req.session.isAuthenticated){ // if (!req.sesson.user)
     return res.status(401).render('401')
  }
  const user =await db.getDb().collection('users').findOne({_id: req.session.user.id})
   if(!user || !user.isAdmin){
    res.status(403).render('403');
   }
  res.render('admin');
});


router.get("/profile", function (req, res) {
  if(!req.session.isAuthenticated){ // if (!req.sesson.user)
     return res.status(401).render('401')
  }

  res.render('profile');
});

router.post("/logout", function (req, res) {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect('/');
});

module.exports = router;
