import { motion } from 'framer-motion';

// Placeholder icons: Consider using a library like Heroicons for professional SVGs.
// For example, for "Slow Loading": <ClockIcon />, "Outdated Design": <EyeOffIcon />, "Zero Conversions": <TrendingDownIcon />

// Updated Icon Placeholders (more descriptive)
const IconSlowLoading = () => (
  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-red-100 rounded-full">
    {/* Placeholder: Imagine a stylized clock or stopwatch icon here */}
    <svg className="w-8 h-8 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
);
const IconOutdatedDesign = () => (
  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-yellow-100 rounded-full">
    {/* Placeholder: Imagine a crossed-out eye or a dated monitor icon here */}
    <svg className="w-8 h-8 text-yellow-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-1.29-1.29m1.29 1.29L6 6m6.938 6.938l6.062-6.062M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-2.14 2.14M12 12a3 3 0 110-6 3 3 0 010 6z"></path></svg>
  </div>
);
const IconZeroConversions = () => (
  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-blue-100 rounded-full">
    {/* Placeholder: Imagine a downward trending graph or an empty shopping cart icon here */}
    <svg className="w-8 h-8 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
  </div>
);


const painPointsData = [
  { 
    icon: <IconSlowLoading />,
    title: "Losing Customers to Slow Speeds?", 
    description: "If your site takes more than 3 seconds to load, you're losing visitors. We build for speed, ensuring your customers stay engaged, not frustrated."
  },
  { 
    icon: <IconOutdatedDesign />,
    title: "Is Your Design Repelling Leads?",
    description: "An outdated or unprofessional design screams untrustworthy. We craft modern, beautiful interfaces that build credibility and invite interaction."
  },
  { 
    icon: <IconZeroConversions />,
    title: "Website Not Converting Traffic?",
    description: "Clicks and views are vanity metrics if they don't turn into customers. Our conversion-focused layouts guide users to take action."
  },
];

// Main Problem Section Component
export default function Problem() {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({ // `i` is the custom index passed for staggering
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15, // Staggered delay for each card
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] // Smooth cubic bezier easing
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50"> {/* Updated background color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive padding */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-slate-800">
            Is Your Website Holding You Back?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10"> {/* Adjusted gap */}
          {painPointsData.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300" // Added hover effect & border-radius
              custom={index} // Pass index to variants for staggered animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {point.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-slate-700">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 