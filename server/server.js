import express from  "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from  "cors";
import contactRoutes from "./routes/contactRoutes.js";




dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;



// middle ware
app.use(cors());
app.use(express.json());  // - i am using this to parse incoming request with JSON  payload


app.use("/api/contact", contactRoutes);

//root testing
app.get("/", (req,res) =>{
    res.send("API is runing...");
})



app.listen(PORT,() =>{
    connectDB();
    console.log(`server running on port ${PORT}`);
});