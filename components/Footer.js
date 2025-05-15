import { motion } from 'framer-motion';

// Placeholder Social Icons
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const FacebookIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm3.6 7.95h-2.3c-.22 0-.4.18-.4.4v1.5h2.7l-.35 2.5h-2.35v7.5h-3V14.4h-2v-2.5h2v-1.7c0-1.4.83-2.3 2.3-2.3h2.3v2.55z"/></svg>;
const TwitterIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.58-1.37 1.9-2.37-.84.5-1.77.86-2.77 1.06C18.3.93 17.05 0 15.64 0c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.1.98-3.56-.18-6.72-1.88-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.9 3.54-.7-.02-1.36-.2-1.92-.52v.05c0 2.07 1.47 3.8 3.43 4.18-.36.1-.74.15-1.13.15-.28 0-.54-.03-.8-.08.55 1.7 2.13 2.93 4 2.97-1.45 1.14-3.3 1.8-5.3 1.8-.34 0-.68-.02-1.02-.06 1.9 1.2 4.13 1.92 6.56 1.92 7.85 0 12.14-6.5 12.14-12.14 0-.18 0-.36-.02-.54.83-.6 1.55-1.35 2.12-2.2z"/></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">PixelRush Sites</h3>
            <p className="text-sm mb-4">
              Websites that actually sell. Delivered in 3 days. Mobile-first. Made to convert.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#"><FacebookIcon /></SocialIcon>
              <SocialIcon href="#"><TwitterIcon /></SocialIcon>
              <SocialIcon href="#"><LinkedInIcon /></SocialIcon>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay:0.1, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li> { /* Assuming sections have IDs for nav */}
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay:0.2, ease: "easeInOut" }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:hello@pixelrush.sites" className="hover:text-white">hello@pixelrush.sites</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a></li>
              {/* Add Address if needed */}
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PixelRush Sites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 