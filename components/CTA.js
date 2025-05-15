import { motion } from 'framer-motion';

// Call to Action Section Component
export default function CTA() {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: [0.42, 0, 0.58, 1] // Smooth cubic bezier easing
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2, // Slight delay after headline
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white"> {/* Updated background to a gradient */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Ready to Elevate Your Business Online?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 md:mb-12 max-w-2xl mx-auto">
            Let PixelRush craft a stunning, high-performance website that drives results. 
            Get your free demo and see the difference.
          </p>
        </motion.div>
        <motion.button 
          className="bg-white text-indigo-700 font-semibold py-3 px-8 md:py-4 md:px-10 rounded-lg shadow-xl hover:bg-indigo-50 transition-colors duration-300 text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-70"
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          variants={buttonVariants} // Using variants for button animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // onClick event to handle scroll to a contact form or open a Calendly modal
          // Example: onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Free Demo Today
        </motion.button>
      </div>
    </section>
  );
} 