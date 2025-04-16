import React from 'react';
import HeroImage from '../assets/profile.png';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/Resume_Fikremariam.pdf';

const Hero = () => {
  const handleResumeDownload = () => {
    // Method 1: Force download (recommended)
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Fikremariam-Mekonnen-FullStack-Developer-Resume.pdf'; // Professional filename
    link.click();
  };

  return (
    <div className='bg-black text-white text-center py-16 px-4'>
      {/* Profile Image with better alt text */}
      <img 
        src={HeroImage} 
        alt="Fikremariam Mekonnen Profile Photo" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 cursor-pointer'
      />

      {/* Headline with semantic HTML improvement */}
      <header>
        <h1 className='text-4xl font-bold'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Fikremariam Mekonnen
          </span>
          , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 max-w-2xl mx-auto'>
          I specialize in building modern, responsive, and accessible web applications.
        </p>
      </header>

      {/* Button Group with improved accessibility */}
      <div className='mt-8 space-x-4 flex justify-center'>
        {/* Contact Button - Fixed nested button/Link issue */}
        <Link 
          to='/contact' 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full
          font-medium text-lg inline-block'
        >
          Contact Me
        </Link>

        {/* Resume Button - Now fully functional */}
        <button
          onClick={handleResumeDownload}
          aria-label="Download Resume"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full
          font-medium text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400'
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;