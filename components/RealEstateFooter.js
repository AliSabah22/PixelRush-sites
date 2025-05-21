import { motion } from 'framer-motion';

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Properties", href: "#featured-listings" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const services = [
  "Luxury Homes",
  "Commercial Properties",
  "Investment Properties",
  "Property Management",
  "Real Estate Consulting"
];

export default function RealEstateFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Luxury Real Estate</h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner in finding the perfect luxury property. We specialize in premium real estate solutions.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <span className="text-sm">
                    {social === 'facebook' && '📘'}
                    {social === 'instagram' && '📸'}
                    {social === 'twitter' && '🐦'}
                    {social === 'linkedin' && '💼'}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  className="text-slate-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-xl">📞</span>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-xl">✉️</span>
                <span>info@luxuryrealestate.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="text-xl">📍</span>
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400"
        >
          <p>© {new Date().getFullYear()} Luxury Real Estate. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 