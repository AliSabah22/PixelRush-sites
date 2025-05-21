import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import RealEstateServices from '../components/RealEstateServices';
import RealEstateWhyUs from '../components/RealEstateWhyUs';
import RealEstateTestimonials from '../components/RealEstateTestimonials';
import RealEstateGallery from '../components/RealEstateGallery';
import RealEstateLimitedOffer from '../components/RealEstateLimitedOffer';
import RealEstateBookingForm from '../components/RealEstateBookingForm';
import RealEstateContactMap from '../components/RealEstateContactMap';
import RealEstateFooter from '../components/RealEstateFooter';

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

export default function RealEstate() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <title>Luxury Real Estate | Premium Properties</title>
        <meta name="description" content="Discover luxury properties and premium real estate solutions. Your trusted partner in finding the perfect home." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-slate-800 cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                Luxury Real Estate
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Properties', id: 'properties' },
                  { name: 'Services', id: 'services' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <motion.a
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10" />
            <div className="absolute inset-0 bg-[url('/images/real-estate-hero.jpg')] bg-cover bg-center" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 text-center text-white px-4"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Discover Your Dream Home
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200">
                Luxury properties in prime locations
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg hover:bg-emerald-700 transition-colors"
                onClick={() => scrollToSection('properties')}
              >
                View Properties
              </motion.button>
            </motion.div>
          </section>

          {/* Properties Section */}
          <section id="properties">
            <RealEstateGallery />
          </section>

          {/* Services Section */}
          <section id="services">
            <RealEstateServices />
          </section>

          {/* About Section */}
          <section id="about">
            <RealEstateWhyUs />
            <RealEstateTestimonials />
          </section>

          {/* Limited Time Offer Section */}
          <RealEstateLimitedOffer />

          {/* Contact Section */}
          <section id="contact">
            <RealEstateBookingForm />
            <RealEstateContactMap />
          </section>
        </main>

        {/* Footer */}
        <RealEstateFooter />
      </div>
    </>
  );
} 