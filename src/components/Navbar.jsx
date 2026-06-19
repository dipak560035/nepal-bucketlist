import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Bucket<span className="text-yellow-400">List</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#destinations" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-400 transition`}>Destinations</a>
            <a href="#experiences" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-400 transition`}>Experiences</a>
            <a href="#why" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-400 transition`}>Why Us</a>
            <a href="#testimonials" className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-400 transition`}>Reviews</a>
            <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">Book Now</button>
          </div>
          <button className="md:hidden text-white text-2xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
