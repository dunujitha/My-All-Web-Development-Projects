
const db = require('../data/database');
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectId;

class Post {
     constructor(title, content, id){
          this.title = title;
          this.content = content;
          
          if(id){
             this.id = new ObjectID(id);
          }

     }
     
            static async fetchAll(){
                    const posts = await db.getDb().collection('posts').find().toArray(); 
                    return posts;
            }

          async  fetch(){
                    if(!this.id){
                              return;
                    }

                    const postDocument =await db.getDb().collection('posts').findOne({_id: this.id});1
                    this.title = postDocument.title;
                    this.content = postDocument.content;
            }

        
                  
     
    async save(){
      let result; 
          if(this.id){
              const result =  await db
                    .getDb()
                    .collection('posts')
                    .updateOne(
                      { _id: this.id },
                      { $set: { title: this.title, content: this.content } }
                    );
          }else{
          const result = await db.getDb().collection('posts').insertOne({
                    title: this.title,
                    content: this.content,
                     });
          
          }

          return result;  
  
     }


     async delete(){
          if(!this.id){
                    return;
          }
      const result =  await db.getDb().collection('posts').deleteOne({ _id: this.id });
      return result;
     }



}



module.exports = Post;