import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();



router.post("/", async (req,res)=>{
    const {name,email, message} = req.body;

    if(!name || !email || !message){
        return res.status(400).json({error: "Please fill all fields"});
    }
    
     try{
        const newContact = new Contact({name,email,message});
        await newContact.save();

        console.log("Saved contact:" , newContact);

        res.status(201).json({success:true, message: "Message saved to database"});
     }catch(error){
        console.error("Error saving contact:", error.message);
        res.status(500).json({success:false, error: "Something went wrong"});
     }


    // console.log("Received contact form:", {name, email, message});
    
    //  res.status(200).json({success:true, message:"Form submitted!"});
});





export default router; 