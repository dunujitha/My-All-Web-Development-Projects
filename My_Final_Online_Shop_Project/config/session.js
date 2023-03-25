const mongodbStore = require('connect-mongodb-session');
const expressSession = require('express-session');

function createSessionStore(){
 const MongoDBStore = mongodbStore(expressSession);

 const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017',
    databaseName: 'final-shop',
    collection: 'sessions'
 });

 return store;
}


function createSessionConfig(){
   return {
     secret: 'super',
     resave: false,
     saveUninitialized: false,
     store: createSessionStore(),
     cookie: {
          maxAge: 2 * 24 * 60 * 60 * 1000
     } 
   }
}



module.exports = createSessionConfig;