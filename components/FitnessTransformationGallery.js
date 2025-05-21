import { motion } from 'framer-motion';

const transformations = [
  {
    before: '/images/fitness-transformation1-before.jpg',
    after: '/images/fitness-transformation1-after.jpg',
    name: 'Sarah K.',
    description: 'Lost 25lbs in 4 months'
  },
  {
    before: '/images/fitness-transformation2-before.jpg',
    after: '/images/fitness-transformation2-after.jpg',
    name: 'John M.',
    description: 'Gained 15lbs of muscle in 6 months'
  },
  {
    before: '/images/fitness-transformation3-before.jpg',
    after: '/images/fitness-transformation3-after.jpg',
    name: 'Emma L.',
    description: 'Lost 30lbs in 5 months'
  },
  {
    before: '/images/fitness-transformation4-before.jpg',
    after: '/images/fitness-transformation4-after.jpg',
    name: 'David R.',
    description: 'Gained 20lbs of muscle in 8 months'
  },
];

export default function FitnessTransformationGallery() {
  return (
    <section id="transformation-gallery" className="py-16 md:py-24 bg-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Real Transformations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformations.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <img src={t.before} alt={`${t.name} before`} className="w-full h-48 object-cover rounded-lg" />
                  <span className="absolute top-2 left-2 bg-accent-DEFAULT text-white px-2 py-1 rounded text-sm">Before</span>
                </div>
                <div className="relative">
                  <img src={t.after} alt={`${t.name} after`} className="w-full h-48 object-cover rounded-lg" />
                  <span className="absolute top-2 left-2 bg-accent-DEFAULT text-white px-2 py-1 rounded text-sm">After</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-primary-dark">{t.name}</p>
                  <p className="text-neutral-600">{t.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-DEFAULT text-white px-8 py-3 rounded-lg shadow-lg hover:bg-accent-dark transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10 font-bold text-black group-hover:text-white">View More Transformations</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 