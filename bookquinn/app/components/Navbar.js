const Navbar = () => {
    return (
        <nav className="flex justify-between p-2 bg-black">
            <a href="#about" className="text-white hover:text-blue-500 p-2">À propos</a>
            <a href="#skills" className="text-white hover:text-pink-500 rounded-full p-2">Compétences</a>
            <a href="#projects" className="text-white hover:text-white rounded-full p-2">Projets</a>
            <a href="#cv" className="text-white hover:text-pink-500 rounded-full p-2">CV</a>
            <a href="#contact" className="text-white hover:text-blue-500 rounded-full p-2">Contact</a>
        </nav>
    );
};

export default Navbar;