import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './component/Navbar';
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
  
    <Router>

       <Navbar/>
      <Routes>
        <Route path="/" element={<h1>Welcome to GoEase</h1>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App;
