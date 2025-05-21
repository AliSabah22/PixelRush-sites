import { motion } from 'framer-motion';

const RealEstateHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image/Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          poster="/images/real-estate-hero-poster.jpg"
        >
          <source src="/videos/real-estate-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover Your Dream Home
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Exclusive Listings • Personalized Service • Local Experts
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-white">Top-Rated Broker</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">🏠</span>
              <span className="font-semibold text-white">30+ Homes Sold</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">📜</span>
              <span className="font-semibold text-white">Licensed & Insured</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-DEFAULT text-white px-8 py-4 rounded-lg shadow-xl hover:bg-accent-dark transition-colors text-lg font-semibold relative overflow-hidden group"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 font-bold text-black group-hover:text-white">Schedule a Private Tour</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white px-8 py-4 rounded-lg shadow-xl hover:bg-white/20 transition-colors text-lg font-semibold backdrop-blur-sm"
              onClick={() => document.getElementById('featured-listings').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Listings
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero; 