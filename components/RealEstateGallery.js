import { motion } from 'framer-motion';

const properties = [
  {
    image: "/images/properties/luxury-home-1.jpg",
    title: "Modern Luxury Villa",
    price: "$2,450,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "6,500"
  },
  {
    image: "/images/properties/luxury-home-2.jpg",
    title: "Waterfront Estate",
    price: "$3,850,000",
    location: "Miami Beach, FL",
    beds: 6,
    baths: 5,
    sqft: "8,200"
  },
  {
    image: "/images/properties/luxury-home-3.jpg",
    title: "Contemporary Penthouse",
    price: "$1,950,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 3,
    sqft: "3,200"
  },
  {
    image: "/images/properties/luxury-home-4.jpg",
    title: "Mountain View Mansion",
    price: "$4,250,000",
    location: "Aspen, CO",
    beds: 7,
    baths: 6,
    sqft: "9,800"
  }
];

export default function RealEstateGallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Featured Properties
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of exclusive luxury properties in prime locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{property.title}</h3>
                <p className="text-2xl font-bold text-accent-DEFAULT mb-2">{property.price}</p>
                <p className="text-neutral-600 mb-4">{property.location}</p>
                
                <div className="flex justify-between text-neutral-600">
                  <div className="flex items-center gap-1">
                    <span className="text-lg">🛏️</span>
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">🚿</span>
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg">📏</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 right-6 bg-accent-DEFAULT text-white px-6 py-2 rounded-lg shadow-lg hover:bg-accent-dark transition-colors"
                onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Viewing
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 