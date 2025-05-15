import { motion } from 'framer-motion';

// Placeholder Social Icons - Consider using a library like react-icons or custom SVGs
const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label} 
    className="text-neutral-400 hover:text-primary-DEFAULT transition-colors duration-300"
  >
    {icon}
  </a>
);

// Example SVGs (simplified) - Replace with actual icons
const IconFacebook = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm3.6 7.95h-2.3c-.22 0-.4.18-.4.4v1.5h2.7l-.35 2.5h-2.35v7.5h-3V14.4h-2v-2.5h2v-1.7c0-1.4.83-2.3 2.3-2.3h2.3v2.55z"/></svg>;
const IconTwitterX = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const IconLinkedIn = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const IconInstagram = () => <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.123.244 2.88.542.756.298 1.458.717 2.123 1.382.666.665 1.084 1.367 1.382 2.123.298.757.484 1.61.542 2.88.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.244 2.123-.542 2.88-.298.756-.717 1.458-1.382 2.123-.665.666-1.367 1.084-2.123 1.382-.757.298-1.61.484-2.88.542-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.123-.244-2.88-.542-.756-.298-1.458-.717-2.123-1.382C1.084 19.033.666 18.33.368 17.575c-.298-.757-.484-1.61-.542-2.88C.012 15.584 0 15.204 0 12s.012-3.584.07-4.85c.058-1.27.244-2.123.542-2.88.298-.756.717-1.458 1.382-2.123C2.967 1.084 3.67.666 4.425.368c.757-.298 1.61-.484 2.88-.542C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.474.012-4.69.068-1.19.054-1.97.228-2.615.488-.666.264-1.205.628-1.75 1.172s-.908 1.084-1.172 1.75c-.26.644-.434 1.425-.488 2.615C1.814 8.526 1.802 8.884 1.802 12s.012 3.474.068 4.69c.054 1.19.228 1.97.488 2.615.264.666.628 1.205 1.172 1.75s1.084.908 1.75 1.172c.644.26 1.425.434 2.615.488C8.526 22.186 8.884 22.198 12 22.198s3.474-.012 4.69-.068c1.19-.054 1.97-.228 2.615-.488.666-.264 1.205-.628 1.75-1.172s.908-1.084 1.172-1.75c.26-.644.434-1.425.488-2.615.056-1.216.068-1.574.068-4.69s-.012-3.474-.068-4.69c-.054-1.19-.228-1.97-.488-2.615-.264-.666-.628-1.205-1.172-1.75s-1.084-.908-1.75-1.172c-.644-.26-1.425-.434-2.615-.488C15.474 3.977 15.116 3.965 12 3.965zm0 3.076c-2.953 0-5.333 2.38-5.333 5.333s2.38 5.333 5.333 5.333 5.333-2.38 5.333-5.333-2.38-5.333-5.333-5.333zm0 8.865c-1.957 0-3.532-1.575-3.532-3.532s1.575-3.532 3.532-3.532 3.532 1.575 3.532 3.532-1.575 3.532-3.532 3.532zm4.908-8.218c0 .808-.656 1.464-1.464 1.464s-1.464-.656-1.464-1.464.656-1.464 1.464-1.464 1.464.656 1.464 1.464z"/></svg>;


// Main Footer Component
export default function Footer() {
  // Animation for footer elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section of the footer with navigation and contact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Column 1: Agency Info & Social Links */}
          <motion.div 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4">PixelRush<span className="text-primary-DEFAULT">.</span>Sites</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Crafting high-performance websites that convert. We combine cutting-edge design with speed and SEO to launch your business forward, fast.
            </p>
            <div className="flex space-x-5">
              <SocialLink href="https://facebook.com/pixelrush" icon={<IconFacebook />} label="Facebook" />
              <SocialLink href="https://x.com/pixelrush" icon={<IconTwitterX />} label="Twitter / X" />
              <SocialLink href="https://linkedin.com/company/pixelrush" icon={<IconLinkedIn />} label="LinkedIn" />
              <SocialLink href="https://instagram.com/pixelrush" icon={<IconInstagram />} label="Instagram" />
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants}
            className="md:col-start-2 lg:col-start-auto" // Adjust column start for medium screens
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {/* These links should ideally scroll to sections or navigate to pages */}
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-secondary-DEFAULT transition-colors">Home</a></li>
              <li><a href="#problem" onClick={(e) => { e.preventDefault(); document.getElementById('problem').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-secondary-DEFAULT transition-colors">The Problem</a></li>
              <li><a href="#solution" onClick={(e) => { e.preventDefault(); document.getElementById('solution').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-secondary-DEFAULT transition-colors">Our Solution</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-secondary-DEFAULT transition-colors">Our Work</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-secondary-DEFAULT transition-colors">Testimonials</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Services (Example) */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="cursor-default">Web Design & Development</span></li>
              <li><span className="cursor-default">3-Day Website Delivery</span></li>
              <li><span className="cursor-default">Mobile-First Design</span></li>
              <li><span className="cursor-default">Conversion Rate Optimization</span></li>
              <li><span className="cursor-default">SEO-Ready Websites</span></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div 
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants}
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>Email: <a href="mailto:hello@pixelrush.sites" className="hover:text-accent-DEFAULT transition-colors">hello@pixelrush.sites</a></li>
              <li>Phone: <a href="tel:+1-555-PIXRUSH" className="hover:text-accent-DEFAULT transition-colors">(555) PIX-RUSH</a></li>
              <li className="pt-2">
                <span className="block">123 Web Design Ave,</span>
                <span className="block">Suite 404, Internet City, CA 90210</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="border-t border-neutral-700 pt-8 mt-8 text-center text-sm">
          <p>&copy; {currentYear} PixelRush Sites. All Rights Reserved. <a href="#" className="hover:text-primary-light transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-primary-light transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
} 