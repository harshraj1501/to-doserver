import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;


 const Connection  = () =>{
    // const MONGODB_URL= `mongodb+srv://$(USERNAME):$(PASSWORD)@real-estate.gfnexuy.mongodb.net/real-estate?retryWrites=true&w=majority`
    // mongoose.connect(MONGODB_URL, {useNewUrlParser:true });

    
mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to mongoDB');
  })

    mongoose.connection.on('connected', ()=>{
        console.log("Database running successfully");
    })

    mongoose.connection.on('disconnected', ()=> {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;