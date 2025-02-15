import { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure you installed lucide-react: npm i lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-[10vh] px-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold">
            Insure<span className="text-amber-400">Me</span>
          </h1>
        </div>

        {/* Navigation Links - Hidden on small screens */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-amber-400 transition-all cursor-pointer">Home</li>
          <li className="hover:text-amber-400 transition-all cursor-pointer">About Us</li>
          <li className="hover:text-amber-400 transition-all cursor-pointer">Claims</li>
          <li className="hover:text-amber-400 transition-all cursor-pointer">Policies</li>
          <li className="hover:text-amber-400 transition-all cursor-pointer">Contacts</li>
        </ul>

        {/* Buttons - Hidden on small screens */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white border border-white py-2 px-4 transition-all hover:bg-white hover:text-black">
            Login
          </button>
          <button className="text-white border border-white py-2 px-4 bg-red-500 font-semibold transition-all hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu - Only visible when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-black w-full text-white py-3">
          <ul className="flex flex-col items-center space-y-4">
            <li className="hover:text-amber-400 transition-all cursor-pointer">Home</li>
            <li className="hover:text-amber-400 transition-all cursor-pointer">About Us</li>
            <li className="hover:text-amber-400 transition-all cursor-pointer">Claims</li>
            <li className="hover:text-amber-400 transition-all cursor-pointer">Policies</li>
            <li className="hover:text-amber-400 transition-all cursor-pointer">Contacts</li>
            <button className="text-white border border-white py-2 px-6 w-full max-w-[200px] transition-all hover:bg-white hover:text-black">
              Login
            </button>
            <button className="text-white border border-white py-2 px-6 w-full max-w-[200px] bg-red-500 font-semibold transition-all hover:bg-white hover:text-black">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
