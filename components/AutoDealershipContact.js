import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AutoDealershipContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or want to schedule a test drive? Reach out to our team and we'll be happy to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Send Us a Message</h3>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitted && (
              <div className="text-emerald-600 text-center font-medium mt-4">
                Thank you! Your message has been sent.
              </div>
            )}
          </motion.form>

          {/* Dealership Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Dealership Information</h3>
            <div>
              <p className="text-slate-700 font-medium">Premium Auto Dealership</p>
              <p className="text-slate-600">1234 Luxury Ave, Cityville, ST 12345</p>
            </div>
            <div>
              <p className="text-slate-700 font-medium">Phone:</p>
              <a href="tel:+1234567890" className="text-emerald-600 hover:underline">(123) 456-7890</a>
            </div>
            <div>
              <p className="text-slate-700 font-medium">Email:</p>
              <a href="mailto:info@premiumauto.com" className="text-emerald-600 hover:underline">info@premiumauto.com</a>
            </div>
            <div>
              <p className="text-slate-700 font-medium">Hours:</p>
              <p className="text-slate-600">Mon-Fri: 9am - 7pm</p>
              <p className="text-slate-600">Sat: 10am - 5pm</p>
              <p className="text-slate-600">Sun: Closed</p>
            </div>
            <div>
              <p className="text-slate-700 font-medium mb-2">Follow Us:</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-500 hover:text-emerald-600 text-2xl" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-slate-500 hover:text-emerald-600 text-2xl" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-slate-500 hover:text-emerald-600 text-2xl" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 