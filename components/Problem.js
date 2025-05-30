'use client';

import { motion } from 'framer-motion';
import ShaderAnimation from './ShaderAnimation';

// Placeholder icons: Consider using a library like Heroicons for professional SVGs.
// For example, for "Slow Loading": <ClockIcon />, "Outdated Design": <EyeOffIcon />, "Zero Conversions": <TrendingDownIcon />

// Updated Icon Placeholders (more descriptive)
const IconSlowLoading = ({ className }) => (
  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${className}`}>
    {/* Placeholder: Imagine a stylized clock or stopwatch icon here */}
    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
);
const IconOutdatedDesign = ({ className }) => (
  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${className}`}> 
    {/* Placeholder: Imagine a crossed-out eye or a dated monitor icon here */}
    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-1.29-1.29m1.29 1.29L6 6m6.938 6.938l6.062-6.062M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-2.14 2.14M12 12a3 3 0 110-6 3 3 0 010 6z"></path></svg>
  </div>
);
const IconZeroConversions = ({ className }) => (
  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full ${className}`}> 
    {/* Placeholder: Imagine a downward trending graph or an empty shopping cart icon here */}
    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
  </div>
);


const problemCards = [
  {
    Icon: IconSlowLoading, // Placeholder icon component
    title: "Slow-Loading Site Dragging You Down?",
    description: "Old, clunky websites frustrate users and send them packing. We build for speed.",
    // Use accent color for issues related to urgency/problems, ensure sufficient contrast
    iconContainerClass: "bg-accent-light/20 text-accent-dark", // Light orange bg, dark orange text
  },
  {
    Icon: IconOutdatedDesign, // Placeholder icon component
    title: "Is Your Design Stuck in the Past?",
    description: "An outdated look screams 'unprofessional'. We craft modern, trustworthy designs.",
    // Use a variation of accent or a contrasting theme color
    iconContainerClass: "bg-accent-light/30 text-accent-DEFAULT", // Slightly different orange shade for variety
  },
  {
    Icon: IconZeroConversions, // Placeholder icon component
    title: "No Leads? No Sales? No Growth?",
    description: "If your site isn't a conversion machine, it's a missed opportunity. We fix that.",
    // Primary color for a more 'foundational' problem being solved
    iconContainerClass: "bg-primary-light/20 text-primary-dark", // Light blue bg, dark blue text
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
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: (i) => ({ // `i` is the custom index passed for staggering
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15, // Staggered delay for each card
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] // Smooth cubic bezier easing
      }
    })
  };

  return (
    <section id="problem" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-white">
            Is Your Website Holding You Back?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Left side - Shader Animation */}
          <div className="h-[600px] rounded-xl overflow-hidden shadow-2xl relative z-0">
            <ShaderAnimation />
          </div>

          {/* Right side - stacked cards */}
          <div className="space-y-6 relative z-10 perspective-1000">
            {problemCards.map((point, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                    <point.Icon className={point.iconContainerClass} />
                  </div>
                  <div className="transform hover:translate-z-10 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{point.title}</h3>
                    <p className="text-white/80 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 