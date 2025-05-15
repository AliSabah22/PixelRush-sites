import { motion } from 'framer-motion';

// Placeholder StarRating component
const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'stroke-current'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 .5l2.939 5.455 6.572.955-4.756 4.635 1.123 6.545z"/>
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    quote: "PixelRush Sites delivered a stunning website in just 3 days! Our online bookings have skyrocketed.",
    name: "Dr. Jane Smith",
    title: "Owner, Bright Smiles Dental",
    logoUrl: "https://via.placeholder.com/120x40.png/cccccc/000000?Text=BrightSmilesLogo",
    rating: 5,
  },
  {
    quote: "The mobile-first design is fantastic, and the site is incredibly fast. Highly recommend!",
    name: "Mike Johnson",
    title: "Manager, FitLife Gym",
    logoUrl: "https://via.placeholder.com/120x40.png/dddddd/000000?Text=FitLifeLogo",
    rating: 5,
  },
  {
    quote: "Our old website wasn't converting. PixelRush built us a site that actually gets us leads.",
    name: "Sarah Brown",
    title: "Realtor, Elite Homes",
    logoUrl: "https://via.placeholder.com/120x40.png/eeeeee/000000?Text=EliteHomesLogo",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Loved by Businesses Like Yours
        </motion.h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, transform: "scale(0.9)" }}
              whileInView={{ opacity: 1, transform: "scale(1)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.logoUrl} alt={`${testimonial.name} logo`} className="h-10 mr-4 filter grayscale brightness-200 invert" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 