function Navbar() {
    return (
        <nav className="hidden md:block fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md text-secundary pt-4 shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <ul className="flex gap-4 font-bold">
                    <li><a href="#about" className="hover:text-white">About</a></li>
                    <li><a href="#projects" className="hover:text-white">Projects</a></li>
                    <li><a href="#skills" className="hover:text-white">Skills</a></li>
                    <li><a href="#experience" className="hover:text-white">Experience</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
