import { STEPS } from '../constants';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Plan your perfect Nepal adventure in 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.id} className="text-center">
                <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white">{step.id}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HowItWorks;
