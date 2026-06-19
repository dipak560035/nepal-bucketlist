import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Trust from './components/Trust';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Search />
      <Destinations />
      <Experiences />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <Trust />
      <Gallery />
      <Newsletter />
      <FinalCTA />
      <Footer />
      
      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    </div>
  );
}

export default App;
