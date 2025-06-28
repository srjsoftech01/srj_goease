import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
            <h1 className="font-bold text-xl">GoEase</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar;