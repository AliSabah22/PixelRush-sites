import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The entire experience was exceptional. From the test drive to financing, everything was smooth and professional.",
    author: "Sarah Johnson",
    role: "Mercedes-Benz S-Class Owner",
    rating: 5,
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: 2,
    quote: "Best car buying experience I've ever had. The team went above and beyond to find my perfect BMW M5.",
    author: "Michael Chen",
    role: "BMW M5 Owner",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: 3,
    quote: "Their attention to detail and customer service is unmatched. I couldn't be happier with my Audi RS7.",
    author: "Emily Rodriguez",
    role: "Audi RS7 Owner",
    rating: 5,
    image: "/images/testimonials/emily.jpg"
  }
];

export default function AutoDealershipTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Customer Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with our premium auto dealership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
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
            Read More Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 