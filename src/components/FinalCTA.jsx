const FinalCTA = () => {
  return (
    <section 
      className="py-24" 
      style={{ 
        background: 'linear-gradient(rgba(14, 165, 233, 0.9), rgba(16, 185, 129, 0.9)), url(\'https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&w=1600\')', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ready for Your Nepal Adventure?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95">Plan your next unforgettable journey with BucketList</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition shadow-xl">
              Start Exploring
            </button>
            <button className="bg-white/20 backdrop-blur text-white px-10 py-5 rounded-full text-xl font-bold border border-white/30 hover:bg-white/30 transition">
              Talk to a Travel Expert
            </button>
          </div>
        </div>
      </section>
  );
};

export default FinalCTA;
