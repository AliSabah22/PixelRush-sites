import { motion } from 'framer-motion';

const contactInfo = {
  phone: "(123) 456-7890",
  email: "info@luxuryrealestate.com",
  address: "123 Luxury Avenue, Beverly Hills, CA 90210",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed"
  }
};

export default function RealEstateContactMap() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
            Contact Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Visit our office or get in touch with us to learn more about our luxury properties.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-xl p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Get in Touch</h3>
                <div className="space-y-4">
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-neutral-600 hover:text-blue-500 transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    <span>{contactInfo.phone}</span>
                  </motion.a>
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-neutral-600 hover:text-blue-500 transition-colors"
                  >
                    <span className="text-2xl">✉️</span>
                    <span>{contactInfo.email}</span>
                  </motion.a>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-neutral-600"
                  >
                    <span className="text-2xl">📍</span>
                    <span>{contactInfo.address}</span>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="font-medium">{contactInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="font-medium">{contactInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="font-medium">{contactInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800">Follow Us</h3>
                <div className="flex gap-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                    >
                      <span className="text-xl">
                        {social === 'facebook' && '📘'}
                        {social === 'instagram' && '📸'}
                        {social === 'twitter' && '🐦'}
                        {social === 'linkedin' && '💼'}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152089722347!2d-118.4003563!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 