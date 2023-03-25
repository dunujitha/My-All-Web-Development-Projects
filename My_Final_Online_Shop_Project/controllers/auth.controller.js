const User = require("../models/user.modle");
const authUtil = require("../util/authentication");
const UserValidation = require("../util/validation");
const flashedDataSession = require('../util/session-flash');

function getSignup(req, res) {
 let sessionData = flashedDataSession.getSessionData(req);
 if(!sessionData){
  sessionData = {
    email: '',
    confimEmail: '',
    password: '',
    fullname: '',
    street: '',
    postal: '',
    city: ''
  }
 }
  res.render("customer/auth/signup", {inputData: sessionData});
}

async function signup(req, res, next) {

  const enteredData = {
    email: req.body.email,
    confimEmail: req.body['confirm-email'],
    password: req.body.password,
    fullname: req.body.fullname,
    street: req.body.street,
    postal: req.body.postal,
    city: req.body.city
  }

  if (
    !UserValidation.UserVlidation(
      req.body.email,
      req.body.password,
      req.body.fullname,
      req.body.street,
      req.body.postal,
      req.body.city
    ) ||
    !UserValidation.confimeEmails(req.body.email, req.body["confirm-email"])
  ) {

    flashedDataSession.flashedData(req, {
      errorMessage: 'Please check your input. Password must be at least 6 character slogn, postal code must be 5 characters',
      ...enteredData

    }, function(){
      res.redirect("/signup");
    })
   
    return;
  }

  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  try {
    const existsAlready = await user.existsAlready();
  
    if(existsAlready){
      flashedDataSession.flashedData(req, {
        errorMessage: 'User Already Exits!',
        ...enteredData
      } , function(){
        res.redirect('/signup');
      })

     return;
    }
   
    await user.signup();
  } catch (error) {
    next(error);
    return;
  }

  return res.redirect("/login");
}

async function login(req, res, next) {
  const user = new User(req.body.email, req.body.password);
  let existingUser;
  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
    return;
  }

  if (!existingUser) {
    flashedDataSession.flashedData(req, {
      errorMessage: 'Invalid Credential - please double-check your email and password!',
      email: user.email,
      password: user.password
    }, function(){
      res.redirect("/login");
    })
    
    return;
  }

  const passwordIsCorrect = await user.compairPassword(existingUser.password);

  if (!passwordIsCorrect) {
    flashedDataSession.flashedData(req, {
      errorMessage: 'Invalid Credential - please double-check your email and password!',
      email: user.email,
      password: user.password
    }, function(){
      res.redirect("/login");
    })

    return;
  }

  authUtil.createUserSession(req, existingUser, function () {
    res.redirect("/");
  });
}

async function getLogin(req, res) {
 let sessionData = flashedDataSession.getSessionData(req);
 if(!sessionData){
  sessionData = {
     email: '',
     password: ''
  }
 }
  res.render("customer/auth/login", {inputData: sessionData});
}

function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect("/login");
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
  logout: logout,
};
