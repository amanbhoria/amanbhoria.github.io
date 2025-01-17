const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="flex justify-center mt-4 py-4">
            <div className="flex space-x-4 bg-black rounded-full p-4">
                <button
                    onClick={() => scrollToSection("home")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection("about")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    About
                </button>
                <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white py-2 px-4 rounded hover:text-gray-400 transition-colors"
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
