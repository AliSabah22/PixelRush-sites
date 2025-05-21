import { motion } from 'framer-motion';
import Image from 'next/image';

const vehicles = [
  {
    id: 1,
    image: "/images/vehicles/mercedes-s-class.jpg",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    price: "$95,000",
    mileage: "5,000",
    transmission: "Automatic",
    engine: "3.0L I6",
    fuel: "Hybrid"
  },
  {
    id: 2,
    image: "/images/vehicles/bmw-m5.jpg",
    make: "BMW",
    model: "M5",
    year: 2023,
    price: "$105,000",
    mileage: "3,500",
    transmission: "Automatic",
    engine: "4.4L V8",
    fuel: "Gasoline"
  },
  {
    id: 3,
    image: "/images/vehicles/audi-rs7.jpg",
    make: "Audi",
    model: "RS7",
    year: 2023,
    price: "$115,000",
    mileage: "2,800",
    transmission: "Automatic",
    engine: "4.0L V8",
    fuel: "Gasoline"
  },
  {
    id: 4,
    image: "/images/vehicles/porsche-taycan.jpg",
    make: "Porsche",
    model: "Taycan",
    year: 2023,
    price: "$125,000",
    mileage: "1,500",
    transmission: "Automatic",
    engine: "Dual Motor",
    fuel: "Electric"
  }
];

export default function AutoDealershipInventory() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Inventory</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles, each offering exceptional performance and luxury
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-slate-600">{vehicle.year}</p>
                  </div>
                  <span className="text-2xl font-bold text-emerald-600">
                    {vehicle.price}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-sm">
                    <span className="text-slate-500">Mileage</span>
                    <p className="font-medium text-slate-800">{vehicle.mileage} mi</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-500">Transmission</span>
                    <p className="font-medium text-slate-800">{vehicle.transmission}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-500">Engine</span>
                    <p className="font-medium text-slate-800">{vehicle.engine}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-500">Fuel Type</span>
                    <p className="font-medium text-slate-800">{vehicle.fuel}</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  View Details
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 text-white px-8 py-3 rounded-full text-lg hover:bg-slate-900 transition-colors"
          >
            View All Inventory
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 