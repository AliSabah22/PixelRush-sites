import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import FitnessServices from '../components/FitnessServices';
import FitnessWhyUs from '../components/FitnessWhyUs';
import FitnessTestimonials from '../components/FitnessTestimonials';
import FitnessTransformationGallery from '../components/FitnessTransformationGallery';
import FitnessLimitedOffer from '../components/FitnessLimitedOffer';
import FitnessBookingForm from '../components/FitnessBookingForm';
import FitnessContactMap from '../components/FitnessContactMap';
import FitnessFooter from '../components/FitnessFooter';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Components
const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ scale: isHovered ? 1.1 : 1 }}
      />
      <div className="relative z-10">
        <motion.div 
          className="text-4xl mb-4"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-primary-dark group-hover:text-primary-DEFAULT transition-colors duration-300">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

const TrustItem = ({ icon, text }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ x: 5 }}
    className="flex items-center gap-3 mb-4 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
  >
    <motion.span 
      className="text-accent-DEFAULT text-xl"
      whileHover={{ scale: 1.2, rotate: 5 }}
    >
      {icon}
    </motion.span>
    <span className="text-neutral-700 font-medium">{text}</span>
  </motion.div>
);

const TestimonialCard = ({ quote, author, rating, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ scale: isHovered ? 1.1 : 1 }}
      />
      <div className="relative z-10">
        {image && (
          <div className="mb-4">
            <img src={image} alt={author} className="w-16 h-16 rounded-full mx-auto border-2 border-accent-DEFAULT" />
          </div>
        )}
        <motion.div 
          className="flex justify-center mb-4"
          animate={{ scale: isHovered ? 1.1 : 1 }}
        >
          {[...Array(rating)].map((_, i) => (
            <motion.span 
              key={i} 
              className="text-accent-DEFAULT"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              ★
            </motion.span>
          ))}
        </motion.div>
        <p className="text-neutral-600 italic mb-4 text-center">"{quote}"</p>
        <p className="text-primary-dark font-semibold text-center">{author}</p>
      </div>
    </motion.div>
  );
};

export default function FitnessStudio() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsFormSubmitting(false);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Iron & Grace Fitness - Transform Your Body, Elevate Your Mind</title>
        <meta name="description" content="Join Iron & Grace - Your premier boutique fitness studio with personalized coaching, modern equipment, and proven results. Start your transformation today!" />
      </Head>

      {/* Sticky Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-blue-900/90 backdrop-blur-md shadow-md z-50"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href="tel:+1234567890" 
              className="text-blue-300 hover:text-blue-100 transition-colors flex items-center gap-2 group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-2xl"
              >
                📞
              </motion.span>
              <span className="group-hover:underline">Call Now: (123) 456-7890</span>
            </a>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors relative overflow-hidden group"
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 font-bold text-white group-hover:text-white">Start Free Trial</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover"
            poster="/images/fitness-hero-poster.jpg"
          >
            <source src="/videos/fitness-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Body, Elevate Your Mind
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join Iron & Grace – Boutique Fitness Studio with Personalized Coaching & Modern Equipment
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center gap-2 bg-blue-800/10 p-3 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">★</span>
                <span className="font-semibold text-white">5-Star Rated</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-blue-800/10 p-3 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">💪</span>
                <span className="font-semibold text-white">Certified Trainers</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 bg-blue-800/10 p-3 rounded-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">📅</span>
                <span className="font-semibold text-white">Flexible Plans</span>
              </motion.div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-xl hover:bg-blue-600 transition-colors text-lg font-semibold relative overflow-hidden group"
              onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 font-bold text-white group-hover:text-white">Join a Free Trial Class</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <FitnessServices />

      {/* Why Us Section */}
      <FitnessWhyUs />

      {/* Testimonials Section */}
      <FitnessTestimonials />

      {/* Transformation Gallery Section */}
      <FitnessTransformationGallery />

      {/* Limited Time Offer Section */}
      <FitnessLimitedOffer />

      {/* Booking Form Section */}
      <FitnessBookingForm />

      {/* Contact + Map Section */}
      <FitnessContactMap />

      {/* Footer Section */}
      <FitnessFooter />
    </>
  );
} 