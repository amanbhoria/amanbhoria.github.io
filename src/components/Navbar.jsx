// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex justify-center mt-4 py-4">
            <div className="flex space-x-4 bg-black  rounded-full p-4">
                <Link
                    to="/"
                    className=" text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className=" text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className=" text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
