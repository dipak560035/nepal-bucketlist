import { EXPERIENCES } from '../constants';

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unforgettable Experiences</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from a wide range of activities</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className={`card-hover bg-gradient-to-br ${exp.gradient} rounded-2xl p-6 text-center`}>
                <div className={`w-16 h-16 ${exp.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${exp.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-bold text-lg mb-1">{exp.name}</h3>
                <p className="text-gray-600 text-sm">{exp.trips} Trips</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experiences;
