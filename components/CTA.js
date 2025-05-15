import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Let's build something beautiful.
        </motion.h2>
        <motion.button 
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition-colors duration-300 text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          // onClick={() => { /* Scroll to Calendly/contact or open modal */ }}
        >
          Book Your Free Demo
        </motion.button>
      </div>
    </section>
  );
} 