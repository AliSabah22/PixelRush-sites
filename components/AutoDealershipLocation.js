import { motion } from 'framer-motion';

export default function AutoDealershipLocation() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Location</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Visit our showroom and experience our premium selection in person
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-80 lg:h-96"
          >
            <iframe
              title="Dealership Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019019857366!2d-122.4194151846816!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e4b0b0b%3A0x7d0b0b0b0b0b0b0b!2s1234%20Luxury%20Ave%2C%20Cityville%2C%20ST%2012345!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          {/* Address Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Showroom Address</h3>
            <div>
              <p className="text-slate-700 font-medium">Premium Auto Dealership</p>
              <p className="text-slate-600">1234 Luxury Ave, Cityville, ST 12345</p>
            </div>
            <div>
              <p className="text-slate-700 font-medium">Phone:</p>
              <a href="tel:+1234567890" className="text-emerald-600 hover:underline">(123) 456-7890</a>
            </div>
            <div>
              <p className="text-slate-700 font-medium">Hours:</p>
              <p className="text-slate-600">Mon-Fri: 9am - 7pm</p>
              <p className="text-slate-600">Sat: 10am - 5pm</p>
              <p className="text-slate-600">Sun: Closed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 