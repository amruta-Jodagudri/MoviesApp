import React from 'react';
import { FaFilm, FaHeart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className=" bg-black p-0 flex justify-between items-center fixed top-0 w-full z-10">
      <div className="text-white text-2xl flex items-center space-x-20">
        <div className="flex items-center mr-4">
          <span className="ml-2">LOGO</span>
        </div>
        <div className="flex items-center text-sm space-x-4">
          <Link to="/" className="text-white relative group flex items-center">
            <FaFilm />
            <span>Movies</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></span>
            <span className="absolute left-0 right-0 top-0 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></span>
          </Link>
          <Link to="/favorites" className="text-white relative group flex items-center">
            <FaHeart className={location.pathname === '/favorites' ? 'text-red-500' : ''} />
            <span>Favorite Movies</span>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></span>
            <span className="absolute left-0 right-0 top-0 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
