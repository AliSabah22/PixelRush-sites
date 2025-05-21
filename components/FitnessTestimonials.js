import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Lost 20lbs in 3 months. Changed my life!',
    author: 'Jessica M.',
    image: '/images/fitness-testimonial1.jpg',
    rating: 5
  },
  {
    quote: 'Trainers here are next level. I feel amazing.',
    author: 'Carlos R.',
    image: '/images/fitness-testimonial2.jpg',
    rating: 5
  },
  {
    quote: 'The group classes are so fun and motivating!',
    author: 'Priya S.',
    image: '/images/fitness-testimonial3.jpg',
    rating: 5
  },
  {
    quote: 'Best gym in the city. Super clean and friendly.',
    author: 'Mike D.',
    image: '/images/fitness-testimonial4.jpg',
    rating: 5
  },
];

export default function FitnessTestimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          What Our Members Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              className="bg-primary-light/10 rounded-xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            >
              <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-accent-DEFAULT" />
              <div className="flex mb-2 justify-center">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-accent-DEFAULT text-lg">★</span>
                ))}
              </div>
              <p className="text-neutral-700 italic mb-4">"{t.quote}"</p>
              <p className="text-primary-dark font-semibold">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 