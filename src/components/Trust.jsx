import { STATS, PARTNERS } from '../constants';

const Trust = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {STATS.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-6">Trusted by travelers worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {PARTNERS.map((partner, idx) => (
                <div key={idx} className="text-2xl font-bold text-gray-400">{partner}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Trust;
