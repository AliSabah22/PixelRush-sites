import { motion } from 'framer-motion';

const trustPoints = [
  { icon: '✔', text: 'Certified & Friendly Trainers' },
  { icon: '✔', text: 'Clean, Modern Facility' },
  { icon: '✔', text: 'Results-Focused Programs' },
  { icon: '✔', text: 'Custom Plans for All Levels' },
  { icon: '✔', text: '1000+ Local Members Transformed' },
];

export default function FitnessWhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Why Choose Iron & Grace?
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {trustPoints.map((item, idx) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-4 mb-6 bg-white/80 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            >
              <span className="text-2xl text-accent-DEFAULT font-bold">{item.icon}</span>
              <span className="text-lg text-primary-dark font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 