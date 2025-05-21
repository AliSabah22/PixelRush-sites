import { motion } from 'framer-motion';

const trustPoints = [
  {
    icon: "🎯",
    text: "Local Area Expertise"
  },
  {
    icon: "🏆",
    text: "Luxury Property Access"
  },
  {
    icon: "🔑",
    text: "Private Showings"
  },
  {
    icon: "🤝",
    text: "End-to-End Service"
  },
  {
    icon: "📈",
    text: "High Closing Success Rate"
  }
];

export default function RealEstateWhyUs() {
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
            Experience the difference of working with a dedicated team of luxury real estate professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-4xl"
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-800">{point.text}</h3>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="h-1 bg-emerald-500 mt-4 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-700 transition-colors"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 