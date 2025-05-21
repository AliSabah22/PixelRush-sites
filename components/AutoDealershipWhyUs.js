import { motion } from 'framer-motion';

const advantages = [
  {
    icon: "🏆",
    title: "Premium Selection",
    description: "Curated inventory of luxury and high-performance vehicles from top manufacturers"
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description: "Competitive pricing and transparent negotiations with no hidden fees"
  },
  {
    icon: "🔧",
    title: "Certified Service",
    description: "Factory-trained technicians and state-of-the-art service facilities"
  },
  {
    icon: "📋",
    title: "Easy Financing",
    description: "Flexible financing options and quick approval process"
  },
  {
    icon: "🚗",
    title: "Test Drive Program",
    description: "Comprehensive test drive experience with no pressure"
  },
  {
    icon: "⭐",
    title: "5-Star Experience",
    description: "Award-winning customer service and satisfaction ratings"
  }
];

export default function AutoDealershipWhyUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to excellence in every aspect of your car buying journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {advantage.title}
              </h3>
              <p className="text-slate-600">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-700 transition-colors"
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 