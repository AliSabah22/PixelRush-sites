import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

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

const TestimonialCard = ({ quote, author, rating }) => {
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
        <motion.div 
          className="flex mb-4"
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
        <p className="text-neutral-600 italic mb-4">"{quote}"</p>
        <p className="text-primary-dark font-semibold">{author}</p>
      </div>
    </motion.div>
  );
};

export default function DentalClinic() {
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
        <title>Smile Confidently Again - Trusted Dental Care in Your City</title>
        <meta name="description" content="Over 1,000 patients treated. Gentle care. Modern equipment. Insurance accepted. Book your free consultation today!" />
      </Head>

      {/* Sticky Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50"
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
              className="text-primary-DEFAULT hover:text-primary-dark transition-colors flex items-center gap-2 group"
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
            className="bg-accent-DEFAULT text-white px-6 py-2 rounded-lg shadow-lg hover:bg-accent-dark transition-colors relative overflow-hidden group"
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 font-bold">Book Free Consultation</span>
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-light/20 via-white to-secondary-light/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Smile Confidently Again – Trusted Dental Care in Your City
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-neutral-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Over 1,000 patients treated. Gentle care. Modern equipment. Insurance accepted.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2 bg-white/50 p-3 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">★</span>
                  <span className="font-semibold">4.9 Google Rating</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white/50 p-3 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold">10+ Years Experience</span>
                </motion.div>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-DEFAULT text-white px-8 py-4 rounded-lg shadow-xl hover:bg-accent-dark transition-colors text-lg font-semibold relative overflow-hidden group"
                onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 font-bold">Book Your Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/dentist-smile.jpg"
                alt="Smiling dentist with patient"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What We Offer
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="🦷"
              title="Teeth Cleaning"
              description="Professional cleaning for a brighter, healthier smile"
            />
            <ServiceCard
              icon="🦷"
              title="Invisalign / Braces"
              description="Modern solutions for perfectly aligned teeth"
            />
            <ServiceCard
              icon="🦷"
              title="Cosmetic Dentistry"
              description="Transform your smile with our cosmetic procedures"
            />
            <ServiceCard
              icon="🦷"
              title="Emergency Appointments"
              description="Same-day care when you need it most"
            />
          </motion.div>
          <motion.p 
            className="text-center mt-8 text-neutral-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Fast appointments. Transparent pricing. Financing available.
          </motion.p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light/10 via-white to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-8"
              >
                Why Choose Us
              </motion.h2>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <TrustItem icon="✔️" text="Licensed & Experienced Dentists" />
                <TrustItem icon="✔️" text="Latest Technology & Painless Procedures" />
                <TrustItem icon="✔️" text="5-Star Google Rated" />
                <TrustItem icon="✔️" text="Insurance & Payment Plans" />
                <TrustItem icon="✔️" text="Same-Day Appointments Available" />
              </motion.div>
            </div>
            <motion.div 
              className="relative h-[300px] rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/dentist-video-poster.jpg"
              >
                <source src="/videos/dentist-welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Our Patients Say
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <TestimonialCard
              quote="They made me feel calm and pain-free. Best experience ever."
              author="Sarah L."
              rating={5}
            />
            <TestimonialCard
              quote="Professional staff and amazing results. Highly recommend!"
              author="Michael R."
              rating={5}
            />
            <TestimonialCard
              quote="The best dental care I've ever received. Truly exceptional service."
              author="Emily T."
              rating={5}
            />
          </motion.div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 bg-gradient-to-br from-primary-light/10 via-white to-secondary-light/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Smile Transformations
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Add before/after images here */}
          </motion.div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-DEFAULT text-white px-6 py-3 rounded-lg shadow-lg hover:bg-accent-dark transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10 font-bold">View Full Gallery</span>
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

      {/* Limited Time Offer */}
      <section className="py-16 bg-accent-DEFAULT text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-dark/20 to-accent-DEFAULT/20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🕒 Free Whitening Kit with First Cleaning
            </h2>
            <p className="text-xl mb-8">This Month Only</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent-DEFAULT px-8 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition-colors text-lg font-semibold relative overflow-hidden group"
              onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 font-bold">Claim This Offer</span>
              <motion.div
                className="absolute inset-0 bg-accent-DEFAULT/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-8">Request Your Appointment</h2>
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="text-4xl mb-4"
                    >
                      ✅
                    </motion.div>
                    <h3 className="text-2xl font-bold text-primary-DEFAULT mb-2">Thank You!</h3>
                    <p className="text-neutral-600">We'll contact you shortly to confirm your appointment.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    onSubmit={handleFormSubmit}
                  >
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Preferred Time</label>
                      <input
                        type="datetime-local"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">Message (Optional)</label>
                      <textarea
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-DEFAULT focus:border-transparent transition-all duration-300"
                        rows="4"
                      />
                    </div>
                    <p className="text-sm text-neutral-500 text-center">100% Privacy. No spam.</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isFormSubmitting}
                      className="w-full bg-accent-DEFAULT text-white py-3 rounded-lg shadow-lg hover:bg-accent-dark transition-colors font-semibold relative overflow-hidden group"
                    >
                      <span className="relative z-10 font-bold">
                        {isFormSubmitting ? 'Sending...' : 'Request My Appointment'}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-16 bg-gradient-to-br from-primary-light/10 via-white to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="h-[400px] rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p 
                  className="flex items-center gap-3 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    📞
                  </motion.span>
                  <a href="tel:+1234567890" className="text-primary-DEFAULT hover:text-primary-dark">
                    (123) 456-7890
                  </a>
                </motion.p>
                <motion.p 
                  className="flex items-center gap-3 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    ✉️
                  </motion.span>
                  <a href="mailto:hello@dentalclinic.com" className="text-primary-DEFAULT hover:text-primary-dark">
                    hello@dentalclinic.com
                  </a>
                </motion.p>
                <motion.p 
                  className="flex items-center gap-3 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    📍
                  </motion.span>
                  <span>123 Dental Street, Your City, State 12345</span>
                </motion.p>
                <motion.p 
                  className="flex items-center gap-3 bg-white/50 p-4 rounded-lg backdrop-blur-sm"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    ⏰
                  </motion.span>
                  <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#" className="hover:text-accent-DEFAULT transition-colors">Home</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#services" className="hover:text-accent-DEFAULT transition-colors">Services</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#gallery" className="hover:text-accent-DEFAULT transition-colors">Gallery</a>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <a href="#contact" className="hover:text-accent-DEFAULT transition-colors">Contact</a>
                </motion.li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <div className="flex flex-wrap gap-4">
                <motion.img 
                  src="/images/insurance-1.png" 
                  alt="Insurance Provider" 
                  className="h-8"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.img 
                  src="/images/insurance-2.png" 
                  alt="Insurance Provider" 
                  className="h-8"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="flex items-center gap-4">
                <motion.img 
                  src="/images/ada-badge.png" 
                  alt="ADA Member" 
                  className="h-12"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-accent-DEFAULT"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  📱
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-accent-DEFAULT"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  💬
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-2xl hover:text-accent-DEFAULT"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  📸
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="border-t border-neutral-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; {new Date().getFullYear()} Your Dental Clinic. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowExitPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Wait! Don't Miss This Special Offer</h3>
              <p className="mb-6">Get a free whitening kit with your first cleaning appointment!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent-DEFAULT text-white py-3 rounded-lg shadow-lg hover:bg-accent-dark transition-colors font-semibold relative overflow-hidden group"
                onClick={() => {
                  setShowExitPopup(false);
                  document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 font-bold">Claim Your Free Whitening Kit</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 