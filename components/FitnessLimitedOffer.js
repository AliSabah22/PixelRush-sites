import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FitnessLimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2023-12-31T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="limited-offer" className="py-16 md:py-24 bg-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
            Free Week of Classes – Sign Up Before December 31st!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Limited time offer. Don't miss out on this amazing opportunity!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-blue-800/20 p-4 rounded-lg">
              <span className="text-4xl font-bold text-white">{timeLeft.days}</span>
              <p className="text-white">Days</p>
            </div>
            <div className="bg-blue-800/20 p-4 rounded-lg">
              <span className="text-4xl font-bold text-white">{timeLeft.hours}</span>
              <p className="text-white">Hours</p>
            </div>
            <div className="bg-blue-800/20 p-4 rounded-lg">
              <span className="text-4xl font-bold text-white">{timeLeft.minutes}</span>
              <p className="text-white">Minutes</p>
            </div>
            <div className="bg-blue-800/20 p-4 rounded-lg">
              <span className="text-4xl font-bold text-white">{timeLeft.seconds}</span>
              <p className="text-white">Seconds</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-xl hover:bg-blue-600 transition-colors text-lg font-semibold relative overflow-hidden group"
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 font-bold group-hover:text-white">Claim My Free Trial</span>
            <motion.div
              className="absolute inset-0 bg-blue-600/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 