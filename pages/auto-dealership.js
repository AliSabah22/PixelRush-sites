import { motion } from 'framer-motion';
import Head from 'next/head';
import AutoDealershipHero from '../components/AutoDealershipHero';
import AutoDealershipInventory from '../components/AutoDealershipInventory';
import AutoDealershipSearch from '../components/AutoDealershipSearch';
import AutoDealershipWhyUs from '../components/AutoDealershipWhyUs';
import AutoDealershipTestimonials from '../components/AutoDealershipTestimonials';
import AutoDealershipFinancing from '../components/AutoDealershipFinancing';
import AutoDealershipContact from '../components/AutoDealershipContact';
import AutoDealershipLocation from '../components/AutoDealershipLocation';
import AutoDealershipFooter from '../components/AutoDealershipFooter';

export default function AutoDealership() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Premium Auto Dealership | New & Pre-Owned Vehicles</title>
        <meta name="description" content="Discover our curated inventory of premium new and pre-owned vehicles. Experience luxury, performance, and exceptional service at our dealership." />
        <meta name="keywords" content="auto dealership, luxury cars, pre-owned vehicles, car financing, test drive" />
        <meta property="og:title" content="Premium Auto Dealership | New & Pre-Owned Vehicles" />
        <meta property="og:description" content="Discover our curated inventory of premium new and pre-owned vehicles. Experience luxury, performance, and exceptional service at our dealership." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/auto-dealership-og.jpg" />
        <link rel="canonical" href="https://yourdealership.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-slate-800 cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                Premium Auto
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Inventory', id: 'inventory' },
                  { name: 'Financing', id: 'financing' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <motion.a
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors"
                onClick={() => scrollToSection('contact')}
              >
                Call Now
              </motion.button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home">
            <AutoDealershipHero />
          </section>

          {/* Featured Inventory Section */}
          <section id="inventory">
            <AutoDealershipInventory />
          </section>

          {/* Search & Filter Section */}
          <section id="search">
            <AutoDealershipSearch />
          </section>

          {/* Why Choose Us Section */}
          <section id="about">
            <AutoDealershipWhyUs />
          </section>

          {/* Testimonials Section */}
          <AutoDealershipTestimonials />

          {/* Financing Section */}
          <section id="financing">
            <AutoDealershipFinancing />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <AutoDealershipContact />
          </section>

          {/* Location Section */}
          <AutoDealershipLocation />
        </main>

        {/* Footer */}
        <AutoDealershipFooter />
      </div>
    </>
  );
} 