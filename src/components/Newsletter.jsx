const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Nepal Travel Inspiration</h2>
          <p className="text-xl text-gray-600 mb-8">Receive travel tips, destination guides, and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <button className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
  );
};

export default Newsletter;
