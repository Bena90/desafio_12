import admin from "firebase-admin";
import config from "../config/config.js";

admin.initializeApp({
  credential: admin.credential.cert(config.firebase)
});

const dataBase = admin.firestore();

class ContainerFirebase {
  constructor(collectionName) {
    this.collection = dataBase.collection(collectionName)
  }

// CRUD Methods:
    // Create
    async createObject (obj){

      const doc = this.collection.doc();
      try {
        await doc.create(obj);
        return doc;
      } catch (error) {
          return error
      }   
  }
  
// Read
  async readObjects (){
    const snapshot = await this.collection.get();
    const response = snapshot.docs.map(doc =>({
      _id: doc.id,
      data: doc.data()
    }))
      return response                
  }

  async readObject (id){
    const doc = this.collection.doc(`${id}`)
    const docSelected = await doc.get();
    const response = docSelected.data();
    if(!response){
      return false;
    }
    response._id = id;
    return response;
  }

// Update
  async updateObject (obj, id){
    const doc = this.collection.doc(`${id}`)

    try {
        const docUpdated = await doc.update(obj)
        return docUpdated;
    } catch (error) {
        console.log(error);
    }
  }

// Remove
  async removeObject (id){
    const doc = this.collection.doc(`${id}`)
    try {
        await doc.delete();
        return ({msg: 'Deleted successfully'})    
    } catch (error) {
        console.log(error);             
    }
  };
}

export default ContainerFirebase;