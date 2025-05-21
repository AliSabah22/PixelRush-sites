'use client';

import { motion } from 'framer-motion';

// Star Rating Component (no changes needed, but ensure it's visually appealing)
const StarRating = ({ rating, starColor = "text-yellow-400" }) => (
  <div className={`flex ${starColor}`}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 md:w-6 md:h-6 ${i < rating ? 'fill-current' : 'stroke-current opacity-50'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"/>
      </svg>
    ))}
  </div>
);

// Realistic testimonial data
const testimonialsData = [
  {
    id: 1,
    quote: "PixelRush completely transformed our online presence. The new site is not only beautiful but also incredibly fast and has doubled our lead generation in just a month! The 3-day delivery was unbelievable.",
    name: "Amanda Chen",
    title: "Founder",
    company: "Bloom & Grow Florists",
    rating: 5,
  },
  {
    id: 2,
    quote: "We were struggling with an outdated website that wasn't mobile-friendly. PixelRush delivered a sleek, modern, mobile-first design that our customers love. Their process is efficient and highly professional.",
    name: "David Miller",
    title: "Owner",
    company: "The Local Grind Cafe",
    rating: 5,
  },
  {
    id: 3,
    quote: "The team at PixelRush is fantastic. They understood our needs perfectly and delivered a high-converting landing page that exceeded our expectations. The best part? It was live in 3 days as promised!",
    name: "Jessica Lee",
    title: "Marketing Manager",
    company: "Nova Real Estate",
    rating: 5,
  },
];

// Main Testimonials Section Component
export default function Testimonials() {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15, // Staggered delay for each testimonial
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] // Smooth cubic bezier easing
      }
    })
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-mediumBlue-dark to-secondary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
            Don't Just Take Our Word For It
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-2xl flex flex-col ring-1 ring-white/20"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="mb-5">
                <StarRating rating={testimonial.rating} starColor="text-accent-DEFAULT" />
              </div>
              <p className="text-base md:text-lg italic mb-6 leading-relaxed text-neutral-100 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-white/20">
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white/80">{testimonial.company.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-neutral-300 opacity-90">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 