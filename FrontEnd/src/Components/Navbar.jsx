import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contextAPI/context";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // Access user and logout function

  // Debugging user
  useEffect(() => {
    console.log("User from Navbar:", user);
  }, [user]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-[10vh] px-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-semibold">
            Insure<span className="text-amber-400">Me</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <Link to="/"><li className="hover:text-amber-400 transition-all cursor-pointer">Home</li></Link>  
          <Link to="/aboutUs"><li className="hover:text-amber-400 transition-all cursor-pointer">About Us</li></Link>
          <Link to="/claims"><li className="hover:text-amber-400 transition-all cursor-pointer">Claims</li></Link> 
          <Link to="/Policies"><li className="hover:text-amber-400 transition-all cursor-pointer">Policies</li></Link>  
          <Link to="/ContactUs"><li className="hover:text-amber-400 transition-all cursor-pointer">Contacts</li></Link> 
        </ul>

        {/* Conditional Rendering for Authenticated User */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-white font-semibold">👤 {user?.name || "User"}</span>
              <button 
                onClick={logout} 
                className="text-white border border-white py-2 px-4 transition-all hover:bg-white hover:text-black"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="text-white border border-white py-2 px-4 transition-all hover:bg-white hover:text-black">
                <Link to="/Login">Login</Link> 
              </button>
              <button className="text-white border border-white py-2 px-4 bg-red-500 font-semibold transition-all hover:bg-white hover:text-black">
                <Link to="/SignUp">Sign Up</Link>  
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black w-full text-white py-3">
          <ul className="flex flex-col items-center space-y-4">
            <Link to="/"><li className="hover:text-amber-400 transition-all cursor-pointer">Home</li></Link>
            <Link to="/aboutUs"><li className="hover:text-amber-400 transition-all cursor-pointer">About Us</li></Link>
            <Link to="/claims"><li className="hover:text-amber-400 transition-all cursor-pointer">Claims</li></Link>
            <Link to="/Policies"><li className="hover:text-amber-400 transition-all cursor-pointer">Policies</li></Link>
            <Link to="/ContactUs"><li className="hover:text-amber-400 transition-all cursor-pointer">Contacts</li></Link>
            
            {user ? (
              <>
                <span className="text-white font-semibold">👤 {user?.name || "User"}</span>
                <button 
                  onClick={logout} 
                  className="text-white border border-white py-2 px-6 w-full max-w-[200px] transition-all hover:bg-white hover:text-black"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="text-white border border-white py-2 px-6 w-full max-w-[200px] transition-all hover:bg-white hover:text-black">
                  <Link to="/Login">Login</Link>
                </button>
                <button className="text-white border border-white py-2 px-6 w-full max-w-[200px] bg-red-500 font-semibold transition-all hover:bg-white hover:text-black">
                  <Link to="/SignUp">Sign Up</Link>
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
