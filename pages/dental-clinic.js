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
            <span className="relative z-10 font-bold text-black group-hover:text-white">Book Free Consultation</span>
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
                <span className="relative z-10 font-bold text-black group-hover:text-white">Book Your Free Consultation</span>
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
              <video className="absolute bottom-4 right-4 w-32 h-20 rounded-lg shadow-lg border border-white" src="/videos/clinic-tour.mp4" autoPlay loop muted playsInline poster="/images/clinic-video-poster.jpg" />
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
            >
              <img src="/images/service-cleaning.jpg" alt="Teeth Cleaning" className="w-12 h-12 rounded-full mb-2 mx-auto" />
            </ServiceCard>
            <ServiceCard
              icon="🦷"
              title="Invisalign / Braces"
              description="Modern solutions for perfectly aligned teeth"
            >
              <img src="/images/service-invisalign.jpg" alt="Invisalign" className="w-12 h-12 rounded-full mb-2 mx-auto" />
            </ServiceCard>
            <ServiceCard
              icon="🦷"
              title="Cosmetic Dentistry"
              description="Transform your smile with our cosmetic procedures"
            >
              <img src="/images/service-cosmetic.jpg" alt="Cosmetic Dentistry" className="w-12 h-12 rounded-full mb-2 mx-auto" />
            </ServiceCard>
            <ServiceCard
              icon="🦷"
              title="Emergency Appointments"
              description="Same-day care when you need it most"
            >
              <img src="/images/service-emergency.jpg" alt="Emergency Appointments" className="w-12 h-12 rounded-full mb-2 mx-auto" />
            </ServiceCard>
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
            >
              <img src="/images/patient-sarah.jpg" alt="Sarah L." className="w-12 h-12 rounded-full mb-3 mx-auto border-2 border-accent-DEFAULT" />
            </TestimonialCard>
            <TestimonialCard
              quote="Professional staff and amazing results. Highly recommend!"
              author="Michael R."
              rating={5}
            >
              <img src="/images/patient-michael.jpg" alt="Michael R." className="w-12 h-12 rounded-full mb-3 mx-auto border-2 border-accent-DEFAULT" />
            </TestimonialCard>
            <TestimonialCard
              quote="The best dental care I've ever received. Truly exceptional service."
              author="Emily T."
              rating={5}
            >
              <img src="/images/patient-emily.jpg" alt="Emily T." className="w-12 h-12 rounded-full mb-3 mx-auto border-2 border-accent-DEFAULT" />
            </TestimonialCard>
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
            <div className="flex flex-col items-center">
              <img src="/images/before1.jpg" alt="Before Smile 1" className="w-32 h-20 object-cover rounded-lg shadow mb-2" />
              <img src="/images/after1.jpg" alt="After Smile 1" className="w-32 h-20 object-cover rounded-lg shadow" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/before2.jpg" alt="Before Smile 2" className="w-32 h-20 object-cover rounded-lg shadow mb-2" />
              <img src="/images/after2.jpg" alt="After Smile 2" className="w-32 h-20 object-cover rounded-lg shadow" />
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/before3.jpg" alt="Before Smile 3" className="w-32 h-20 object-cover rounded-lg shadow mb-2" />
              <img src="/images/after3.jpg" alt="After Smile 3" className="w-32 h-20 object-cover rounded-lg shadow" />
            </div>
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
              <span className="relative z-10 font-bold text-black group-hover:text-white">View Full Gallery</span>
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
              <span className="relative z-10 font-bold text-black group-hover:text-white">Claim This Offer</span>
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
                      <span className="relative z-10 font-bold text-black group-hover:text-white">
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
      <footer className="bg-white text-black py-12">
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
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2 text-base font-medium mb-3">
                <li>✔️ ADA Member</li>
                <li>✔️ Board Certified</li>
                <li>✔️ Invisalign Provider</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="h-8 w-8 text-neutral-500 hover:text-accent-DEFAULT transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="h-8 w-8 text-neutral-500 hover:text-accent-DEFAULT transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.608 1.385 2.557 2.436 2.351 3.548 2.293 4.829 2.235 6.109 2.223 6.518 2.223 12c0 5.482.012 5.891.07 7.171.058 1.281.264 2.393 1.315 3.444 1.051 1.051 2.163 1.257 3.444 1.315 1.28.058 1.689.07 7.171.07s5.891-.012 7.171-.07c1.281-.058 2.393-.264 3.444-1.315 1.051-1.051 1.257-2.163 1.315-3.444.058-1.28.07-1.689.07-7.171s-.012-5.891-.07-7.171c-.058-1.281-.264-2.393-1.315-3.444C21.393.334 20.281.128 19.001.07 17.721.012 17.312 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="h-8 w-8 text-neutral-500 hover:text-accent-DEFAULT transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.016-.634.962-.689 1.8-1.56 2.46-2.548z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="h-8 w-8 text-neutral-500 hover:text-accent-DEFAULT transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
                </a>
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
    </>
  );
} 