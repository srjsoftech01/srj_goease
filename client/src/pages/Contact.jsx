import axios from "axios";
import { useState } from "react";


const Contact = () =>{

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const [status, setStatus] = useState("");  // To show success/fail message
    

    const handleChange = (e) =>{
        const {name, value} = e.target; 

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

      try{
        const res  = await axios.post("http://localhost:5000/api/contact",formData);

        if(res.status === 200){
            setStatus("Message sent successfully!");
            setFormData({name:"", email:"", message:""});
        
          }
       }catch(error){
            console.log("Error sending form:", error.message);
            setStatus("Failed to send message.");
        }
    }

    return(
        <div>
            <h2>Contact Us</h2>

            {status  && <p className="mb-4 text-green-600">{status}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-300 p-2 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-black border-2px border-solid-black px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        
    
        </form>
        </div>
    )
}

export default Contact;