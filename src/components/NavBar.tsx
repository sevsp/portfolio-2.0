// src/components/Navbar.tsx

function Navbar() {
  return (
    <nav className="hidden md:block bg-background text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Sevsp</h1>
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
      <hr className="border-t border-white opacity-20" />
    </nav>
  );
}

export default Navbar;
