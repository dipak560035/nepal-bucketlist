import { DESTINATIONS } from '../constants';

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the most amazing places to visit in Nepal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <div key={dest.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
           
                
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Destinations;










































// import { DESTINATIONS } from '../constants';

// const Destinations = () => {
//   return (
//     <section id="destinations" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the most amazing places to visit in Nepal</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {DESTINATIONS.map((dest) => (
//               <div key={dest.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
//                 <div className="relative overflow-hidden">
//                   <img 
//                     src={dest.image} 
//                     alt={dest.name} 
//                     className="w-full h-64 object-cover zoom-hover" 
//                     loading="lazy"
//                   />
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
//                     <i className="fas fa-star text-yellow-400"></i> {dest.rating}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{dest.name}</h3>
//                   <p className="text-gray-600 mb-4">{dest.description}</p>
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <span className="text-2xl font-bold text-sky-600">{dest.price}</span>
//                       <span className="text-gray-500">/person</span>
//                     </div>
//                     <button className="gradient-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90">
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//   );
// };

// export default Destinations;
