import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They found us our dream home within weeks and made the entire process seamless.",
    author: "Sarah & Michael Johnson",
    rating: 5,
    image: "/images/testimonials/couple-1.jpg"
  },
  {
    quote: "Their market knowledge and negotiation skills helped us get the best deal on our investment property. Highly recommended!",
    author: "David Chen",
    rating: 5,
    image: "/images/testimonials/investor-1.jpg"
  },
  {
    quote: "From the first consultation to closing, their attention to detail and personalized service exceeded our expectations.",
    author: "Emily Rodriguez",
    rating: 5,
    image: "/images/testimonials/client-1.jpg"
  }
];

export default function RealEstateTestimonials() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Client Success Stories
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <div className="relative z-10">
                <div className="mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-16 h-16 rounded-full mx-auto border-2 border-accent-DEFAULT object-cover"
                  />
                </div>
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-accent-DEFAULT"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <p className="text-neutral-600 italic mb-4 text-center">"{testimonial.quote}"</p>
                <p className="text-primary-dark font-semibold text-center">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 