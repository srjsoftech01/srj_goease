// mongo db connection here

import mongoose from "mongoose";

const connectDB = async () =>{
     try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
     } catch (error) {
        console.log("MongoDB connection error:", error.message);
     }
}

export default connectDB;



