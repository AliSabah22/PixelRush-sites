import { motion } from 'framer-motion';

export default function AutoDealershipFooter() {
  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] py-16 mt-20 border-t border-[#334155]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start font-['Space_Grotesk']"
        >
          {/* Brand & Contact */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#334155]/50"
          >
            <h3 className="text-3xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">Premium Auto</h3>
            <p className="text-[#94A3B8] mb-4">1234 Luxury Ave, Cityville, ST 12345</p>
            <p className="text-[#94A3B8]">Phone: <a href="tel:+1234567890" className="text-[#F8FAFC] hover:text-[#F97316] transition-colors">(123) 456-7890</a></p>
            <p className="text-[#94A3B8]">Email: <a href="mailto:info@premiumauto.com" className="text-[#F8FAFC] hover:text-[#F97316] transition-colors">info@premiumauto.com</a></p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#334155]/50"
          >
            <h4 className="text-xl font-semibold mb-6 text-[#2563EB]">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#home" 
                  className="text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#inventory" 
                  className="text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                  Inventory
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#financing" 
                  className="text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                  Financing
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#about" 
                  className="text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                  About
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#contact" 
                  className="text-[#F8FAFC] hover:text-[#F97316] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></span>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Hours */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-[#1E293B]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#334155]/50"
          >
            <h4 className="text-xl font-semibold mb-6 text-[#2563EB]">Connect & Hours</h4>
            <div className="flex gap-6 mb-8">
              <motion.a 
                whileHover={{ scale: 1.2, color: "#F97316" }}
                href="#" 
                className="text-[#F8FAFC] text-2xl transition-colors" 
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: "#F97316" }}
                href="#" 
                className="text-[#F8FAFC] text-2xl transition-colors" 
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, color: "#F97316" }}
                href="#" 
                className="text-[#F8FAFC] text-2xl transition-colors" 
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </div>
            <div className="space-y-2">
              <p className="text-[#94A3B8]">Mon-Fri: 9am - 7pm</p>
              <p className="text-[#94A3B8]">Sat: 10am - 5pm</p>
              <p className="text-[#94A3B8]">Sun: Closed</p>
            </div>
            <div className="mt-6">
              <span className="inline-block bg-[#22C55E] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg shadow-[#22C55E]/20">
                Top Rated Dealership
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 text-center text-[#94A3B8] text-sm font-medium tracking-wide border-t border-[#334155]"
        >
          <span className="inline-block">&copy; {new Date().getFullYear()} Premium Auto Dealership. All rights reserved.</span>
        </motion.div>
      </div>
    </footer>
  );
} 