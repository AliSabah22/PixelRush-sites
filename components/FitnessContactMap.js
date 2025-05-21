import { motion } from 'framer-motion';

export default function FitnessContactMap() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="text-accent-DEFAULT text-xl">📞</span>
                <a href="tel:+1234567890" className="text-primary-dark hover:underline">(123) 456-7890</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-DEFAULT text-xl">📧</span>
                <a href="mailto:info@ironandgrace.com" className="text-primary-dark hover:underline">info@ironandgrace.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-DEFAULT text-xl">📍</span>
                <span className="text-primary-dark">123 Fitness Street, City, State 12345</span>
              </p>
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-primary-dark">Hours of Operation</h3>
            <div className="space-y-2">
              <p className="text-primary-dark">Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p className="text-primary-dark">Saturday: 7:00 AM - 8:00 PM</p>
              <p className="text-primary-dark">Sunday: 8:00 AM - 6:00 PM</p>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-accent-DEFAULT hover:text-accent-dark transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-accent-DEFAULT hover:text-accent-dark transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-accent-DEFAULT hover:text-accent-dark transition-colors">
                <span className="text-2xl">📸</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-dark">Find Us</h3>
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 