import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏋️',
    title: 'Personal Training',
    description: '1-on-1 coaching tailored to your goals, fitness level, and schedule.'
  },
  {
    icon: '🤸‍♀️',
    title: 'Group Classes',
    description: 'Yoga, HIIT, Spin & more. Fun, motivating, and community-driven.'
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    description: 'Personalized meal plans and expert guidance for lasting results.'
  },
  {
    icon: '💪',
    title: 'Strength & Conditioning',
    description: 'Modern equipment and science-backed programs for all levels.'
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' }
};

export default function FitnessServices() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Our Core Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="bg-primary-light/10 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 