const db = require('../data/database');
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');

class User{
   constructor(email, password, fullname, street, postal, city){
    this.email = email;
    this.password = password;
    this.fullname = fullname;
    this.address = {
          street: street,
          postal: postal,
          city: city
    }  
   }

   compairPassword(hashedPassword){
    return bcrypt.compare(this.password, hashedPassword)

   }


   static async findById(userId){
    const uid = new mongodb.ObjectId(userId);
   return db.getDb().collection('users').findOne({_id: uid}, {projection: {password: 0}});
  }

   getUserWithSameEmail(){
     return db.getDb().collection('users').findOne({email: this.email});
   }

   async existsAlready(){
    const existingUser =  await this.getUserWithSameEmail();
    if(existingUser){
      return true;
    }else{
      return false;
    }
   }

  async signup(){

     const hashPassword = await bcrypt.hash(this.password, 12);
    const user = {
        email: this.email,
        password: hashPassword,
        fullname: this.fullname,
        address: this.address
    }

    await db.getDb().collection('users').insertOne(user) ; 
   
   }
}




module.exports = User;