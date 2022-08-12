import mongoose from 'mongoose';
import config from '../config/config.js';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            config.mongodb.connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB Conectado: ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}

await connectDB();

class ContainerMongo {
    constructor(collectionName, schema){
        this.collection = mongoose.model(collectionName, schema)
    }
    
// CRUD Methods:
    // Create
        async createObject (obj){
            
            const object = new this.collection (obj);
            try {
                const saveObject = await object.save();
                return saveObject
            } catch (error) {
                return error
            }   
        }
        
    // Read
        async readObjects (){
            const objects = await this.collection.find();
            console.log(objects)
            return objects                
        }

        async readObject (id){
            const object = await this.collection.findById(id);
            if (!object){
                return false
            }
            return object;
        }

    // Update
        async updateObject (obj){
            try {
                const updateObject = await obj.save();
                return updateObject;
            } catch (error) {
                console.log(error);
            }
        }

    // Remove
        async removeObject (id){
            const object = await this.collection.findById(id);

            if (!object){
                return false
            }

            try {
                await object.deleteOne();
                return ({msg: 'Deleted successfully'})    
            } catch (error) {
                console.log(error);             
            }
        };
}

export default ContainerMongo;