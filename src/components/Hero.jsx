const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Dream Nepal Adventure Starts Here
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Discover breathtaking mountains, vibrant cultures, hidden gems, and unforgettable experiences across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-lg">
              Explore Trips
            </button>
            <button className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/30 transition">
              <i className="fas fa-play-circle mr-2"></i> Watch Video
            </button>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold">10,000+</div>
            <div className="text-sm opacity-90">Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm opacity-90">Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9★</div>
            <div className="text-sm opacity-90">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
