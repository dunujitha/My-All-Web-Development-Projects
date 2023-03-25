function isEmpty(value) {
  !value && !valid.trim() === "";
}

function userCredentialsAreValid(email, password) {
  return (
    email && email.includes('@') && password && password.trim().length >= 6
  );
}

function UserVlidation(email, password, fullname, street, postal, city) {
  return (
    userCredentialsAreValid &&
    !isEmpty(fullname) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
  );
}

function confimeEmails(email, confimEmail){
  return email === confimEmail;
}


module.exports = {
  UserVlidation: UserVlidation,
  confimeEmails: confimeEmails
};
