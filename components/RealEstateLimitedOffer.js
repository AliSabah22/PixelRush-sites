import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function RealEstateLimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Limited Time Offer
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't miss out on our exclusive deal! Schedule a viewing within the next 7 days and receive a special bonus.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-800/20 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-sm uppercase tracking-wider">
                      {unit}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors text-lg font-semibold"
                onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Special Offer
              </motion.button>
              <p className="text-white/80 mt-4 text-sm">
                *Offer valid for the first 7 days only. Terms and conditions apply.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 