import { motion } from 'framer-motion';

// Placeholder icons: Consider using a library like Heroicons.
// Examples: Mobile: <DevicePhoneMobileIcon />, Speed: <BoltIcon />, SEO: <MagnifyingGlassCircleIcon />,
// UI: <SparklesIcon />, Branding: <SwatchIcon />, Launch: <RocketLaunchIcon />

// Updated Icon Placeholders (more descriptive)
const IconMobileFriendly = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary-light/30 text-primary-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75A2.25 2.25 0 0015.75 1.5h-2.25m-3.75 0V5.625m3.75-4.125V5.625m0-4.125H12m0 0V5.625m0 0H9.75m-3.75 0V5.625M7.5 15h9M7.5 18h9" /></svg></div>;
const IconFastLoad = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-secondary-light/30 text-secondary-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg></div>;
const IconSeoReady = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-accent-light/30 text-accent-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></div>;
const IconInteractiveUI = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary-light/30 text-primary-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.5 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L16.5 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 18.25L18 21l-.25-2.75a3.375 3.375 0 00-2.25-2.25L12.75 15l2.75-.25a3.375 3.375 0 002.25-2.25L18 9.75l.25 2.75a3.375 3.375 0 002.25 2.25L23.25 15l-2.75.25a3.375 3.375 0 00-2.25 2.25z" /></svg></div>;
const IconCustomBranding = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-secondary-light/30 text-secondary-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.421a3 3 0 005.78 1.128 2.25 2.25 0 012.4 2.245 4.5 4.5 0 00-8.4-2.245c0-.399.078-.78.22-1.128zm0 0l1.262 1.262M3.866 16.122l1.262-1.262m0 0a15.998 15.998 0 013.388-1.62m-5.043-.025a15.994 15.994 0 00-1.622-3.39m6.529 6.529l1.262 1.262M6.166 9.869L7.427 8.607m0 0L8.69 7.346A15.998 15.998 0 0012 3c4.229 0 7.863 2.06 10.14 5.069a16.006 16.006 0 00-2.131 3.069m-5.614-5.614A3 3 0 0012.622 6.166M9.869 9.868a3 3 0 012.755-1.725m2.755 1.725a3 3 0 012.755 1.725M6.166 9.869a3 3 0 00-2.755 1.725M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg></div>;
const IconRapidLaunch = () => <div className="w-12 h-12 mb-4 flex items-center justify-center bg-accent-light/30 text-accent-dark rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58v-4.8m3.52 3.52a11.19 11.19 0 00-3.52-3.52m0 0a11.19 11.19 0 00-3.52 3.52m3.52-3.52l-3.52 3.52M6.061 10.061a11.19 11.19 0 013.52-3.52m0 0a11.19 11.19 0 013.52 3.52M12 21a9.004 9.004 0 008.216-11.722L15.59 14.37M3.784 9.278L6.061 10.06M12 3.75a9.008 9.008 0 00-8.216 11.722L8.41 9.63" /></svg></div>;

const solutionsData = [
  { icon: <IconMobileFriendly />, title: "Mobile-First Supremacy", description: "With most users on mobile, we design for the smallest screen first, ensuring a flawless experience everywhere." },
  { icon: <IconFastLoad />, title: "Blazing-Fast Performance", description: "We optimize every asset and line of code for lightning-fast load times that Google and your users will love." },
  { icon: <IconSeoReady />, title: "SEO-Optimized Foundation", description: "Built from the ground up with SEO best practices to maximize your visibility on search engines." },
  { icon: <IconInteractiveUI />, title: "Engaging & Interactive UI/UX", description: "We create intuitive and delightful user experiences with subtle animations that guide and engage." },
  { icon: <IconCustomBranding />, title: "True-to-You Custom Branding", description: "Your website will be a unique reflection of your brand, designed to captivate and convert your target audience." },
  { icon: <IconRapidLaunch />, title: "3-Day Delivery Promise", description: "Our streamlined process means your powerful, custom website is ready to launch in just three business days." },
];

// Main Solution Section Component
export default function Solution() {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] // A common smooth easing curve
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-primary-dark">
            PixelRush: Your Shortcut to a Killer Website
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {solutionsData.map((solution, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="flex justify-start mb-4">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary-DEFAULT">{solution.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 