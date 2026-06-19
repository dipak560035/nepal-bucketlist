const Search = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 -mt-16 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Destination</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>Select Destination</option>
                  <option>Everest Base Camp</option>
                  <option>Pokhara</option>
                  <option>Annapurna Circuit</option>
                  <option>Chitwan Safari</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Travel Date</label>
                <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Travelers</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3-5 Travelers</option>
                  <option>6+ Travelers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Budget</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                  Find My Adventure
                </button>
              </div>
            </div>
            
            {/* Popular Searches */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 font-medium">Popular searches:</span>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-sky-100 hover:text-sky-600 transition">Everest Base Camp</button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-sky-100 hover:text-sky-600 transition">Pokhara</button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-sky-100 hover:text-sky-600 transition">Annapurna Circuit</button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-sky-100 hover:text-sky-600 transition">Chitwan Safari</button>
              <button className="px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-sky-100 hover:text-sky-600 transition">Lumbini</button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Search;
