import { GALLERY_IMAGES } from '../constants';

const Gallery = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nepal in Pictures</h2>
            <p className="text-xl text-gray-600">A glimpse of what awaits you</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.id} className="overflow-hidden rounded-xl">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-48 object-cover zoom-hover" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Gallery;
