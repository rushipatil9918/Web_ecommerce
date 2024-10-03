import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);

  // Toggle dropdown for Women
  const handleWomenClick = () => {
    setWomenDropdownOpen(!isWomenDropdownOpen);
    setMenDropdownOpen(false); // Close Men dropdown if open
  };

  // Toggle dropdown for Men
  const handleMenClick = () => {
    setMenDropdownOpen(!isMenDropdownOpen);
    setWomenDropdownOpen(false); // Close Women dropdown if open
  };

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          
          {/* Logo */}
          <div className="ml-3 mr-5">
            <a href="#">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=white&shade=600"
                alt="Your Company Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            
            {/* Women Dropdown */}
            <div className="relative">
              <button
                onClick={handleWomenClick}
                className="hover:text-gray-700 focus:outline-none"
              >
                Women
              </button>
              {isWomenDropdownOpen && (
                <div className="absolute left-0 bg-white shadow-lg py-2 rounded-md mt-1 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tops</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dresses</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                </div>
              )}
            </div>

            {/* Men Dropdown */}
            <div className="relative">
              <button
                onClick={handleMenClick}
                className="hover:text-gray-700 focus:outline-none"
              >
                Men
              </button>
              {isMenDropdownOpen && (
                <div className="absolute left-0 bg-white shadow-lg py-2 rounded-md mt-1 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shirts</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pants</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shoes</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-gray-700">Company</a>
            <a href="#" className="hover:text-gray-700">Store</a>

            {/* Search Box */}
            <div className="relative flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-full py-1 px-4 pl-10 focus:outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className="absolute left-3 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Sign In, Create Account, Cart */}
          <div className="flex space-x-6 items-center ml-auto">
            {/* Sign In */}
            <button className="hover:text-gray-700">Sign In</button>
            {/* Create Account */}
            <a href="#" className="hover:text-gray-700">Create Account</a>
            {/* Cart */}
            <div className="relative">
              <LocalMallIcon className="text-gray-700 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
