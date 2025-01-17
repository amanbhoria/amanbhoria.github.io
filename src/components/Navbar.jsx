// Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-monokai-background text-monokai-foreground py-4 shadow-md">
            <div className="flex justify-center space-x-6">
                <Link
                    to="/"
                    className="hover:text-monokai-pink transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="hover:text-monokai-green transition-colors"
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="hover:text-monokai-orange transition-colors"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
