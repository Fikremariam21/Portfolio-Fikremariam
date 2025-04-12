import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white sticky top-0 z-50 w-full shadow-md'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16 py-3'>
        <div className='flex justify-between items-center'>
          {/* Logo/Name - visible on all screens */}
          <div className='text-2xl font-bold'>
            <Link to="/">Fikremariam</Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link to="/" className='hover:text-gray-400 transition-colors duration-200 py-2'>Home</Link>
            <Link to="/about" className='hover:text-gray-400 transition-colors duration-200 py-2'>About Me</Link>
            <Link to="/service" className='hover:text-gray-400 transition-colors duration-200 py-2'>Services</Link>
            <Link to="/projects" className='hover:text-gray-400 transition-colors duration-200 py-2'>Projects</Link>
            <Link to="/contact" className='hover:text-gray-400 transition-colors duration-200 py-2'>Contact</Link>
            
            <a 
              href='https://www.linkedin.com/in/fikremariam-mekonnnen/' 
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-medium transform transition-all duration-300 hover:scale-105 px-6 py-2 rounded-full'
            >
              Connect Me
            </a>
          </div>

          {/* Mobile Hamburger Button - visible only on mobile */}
          <button 
            className='md:hidden focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg 
              className='w-6 h-6' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24' 
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - appears when hamburger is clicked */}
        {isOpen && (
          <div className='md:hidden bg-black py-4 space-y-4'>
            <Link 
              to="/" 
              className='block hover:text-gray-400 transition-colors duration-200 py-2'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className='block hover:text-gray-400 transition-colors duration-200 py-2'
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
            <Link 
              to="/service" 
              className='block hover:text-gray-400 transition-colors duration-200 py-2'
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className='block hover:text-gray-400 transition-colors duration-200 py-2'
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className='block hover:text-gray-400 transition-colors duration-200 py-2'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <a 
              href='https://www.linkedin.com/in/fikremariam-mekonnnen/' 
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium text-center py-2 px-4 rounded-full mt-4'
            >
              Connect Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;