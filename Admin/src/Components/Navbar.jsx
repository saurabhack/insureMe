import { useState } from "react";
import { Link } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { Home, User, Settings, LogOut, Menu, X ,Shield} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } min-h-screen bg-gray-900 text-white transition-all duration-300 p-4 flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          className="self-end mb-4 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Items */}
        <nav className="space-y-4">
          <NavItem to="/admin" icon={<Home size={24} />} label="Dashboard" isOpen={isOpen} />
          <NavItem to="/users" icon={<User size={24} />} label="Users" isOpen={isOpen} />
          <NavItem to="/settings" icon={<Settings size={24} />} label="Settings" isOpen={isOpen} />
          <NavItem to="/settings" icon={<Shield size={24} />} label="Add Policies" isOpen={isOpen} />
          <NavItem to="/settings" icon={<FaUser size={24} />} label="Add New Admin User" isOpen={isOpen} />
          <NavItem to="/logout" icon={<LogOut size={24} />} label="Logout" isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label, isOpen }) {
  return (
   <div
      to={to}
      className="flex items-center p-3 rounded-lg hover:bg-gray-800 transition"
    >
      {icon}
      {isOpen && <span className="ml-4">{label}</span>}
    </div>
  );
}
