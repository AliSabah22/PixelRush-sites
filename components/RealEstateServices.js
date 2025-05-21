import { motion } from 'framer-motion';

const services = [
  {
    icon: "🏰",
    title: "Luxury Homes",
    description: "Exclusive properties in prime locations with premium amenities and stunning architecture."
  },
  {
    icon: "🏢",
    title: "Commercial Properties",
    description: "Prime commercial spaces for businesses looking to establish or expand their presence."
  },
  {
    icon: "🏖️",
    title: "Vacation Homes",
    description: "Luxurious vacation properties in sought-after destinations for the perfect getaway."
  },
  {
    icon: "📈",
    title: "Investment Properties",
    description: "High-yield investment opportunities with strong potential for appreciation."
  }
];

export default function RealEstateServices() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our comprehensive range of real estate services designed to meet your every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2 group"
              >
                Learn More
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 