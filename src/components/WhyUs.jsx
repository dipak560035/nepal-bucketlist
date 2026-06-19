import { FEATURES } from '../constants';

const WhyUs = () => {
  return (
    <section id="why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Travel With BucketList</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience travel done right</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="card-hover bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className={`fas ${feature.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default WhyUs;
