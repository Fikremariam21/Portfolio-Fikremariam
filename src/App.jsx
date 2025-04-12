import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1); // remove the leading '/'
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top if it's the home route
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      
      {/* All sections in one page */}
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="service"><Service /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </div>
  );
}
export default App;