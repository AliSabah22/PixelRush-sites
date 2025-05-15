import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// More realistic project data
const projectsData = [
  {
    id: 1,
    title: "Apex Dental: Smile Brighter Online",
    category: "Healthcare / Dentistry",
    // Using Unsplash for more realistic placeholders - replace with actual project images
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format", 
    description: "A sleek, patient-focused website for a modern dental clinic, featuring online appointment booking and clear service showcases. Resulted in a 40% increase in new patient inquiries.",
    liveLink: "#", // Placeholder for live site
    caseStudyLink: "#" // Placeholder for case study
  },
  {
    id: 2,
    title: "Iron & Grace Fitness Hub",
    category: "Fitness & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "Dynamic web portal for a boutique gym, integrating class schedules, membership management, and trainer profiles. Boosted member engagement by 60%.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 3,
    title: "Prestige Properties Showcase",
    category: "Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "Luxurious online presence for a high-end realtor, showcasing properties with immersive galleries and virtual tours. Led to a 25% faster sales cycle.",
    liveLink: "#",
    caseStudyLink: "#"
  },
  {
    id: 4,
    title: "Velocity Motors: Online Showroom",
    category: "Automotive Dealership",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "A comprehensive vehicle inventory and sales platform for a local car dealership, featuring advanced search filters and financing calculators. Increased online leads by 35%.",
    liveLink: "#",
    caseStudyLink: "#"
  },
];

// Portfolio Section Component
export default function Portfolio() {
  const sectionRef = useRef(null);
  // Ref to store an array of card elements for GSAP animations
  const cardsRef = useRef([]);
  cardsRef.current = []; // Ensure it's reset on re-renders before collecting refs

  useEffect(() => {
    const stInstances = []; // Array to store ScrollTrigger instances

    cardsRef.current.forEach((card, index) => {
      const tween = gsap.fromTo(card, 
        { opacity: 0, y: 60, scale: 0.95 }, // Initial state: slightly scaled down and moved down
        { // Target state
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, // Animation duration
          delay: index * 0.15, // Staggered delay for a cascading effect
          ease: "power3.out", // Smooth easing function
          scrollTrigger: {
            trigger: card, // Element that triggers the animation
            start: "top 85%", // Animation starts when the top of the card is 85% from the top of the viewport
            end: "bottom 20%", // Optional: define an end point for scrubbing or other actions
            toggleActions: "play none none none", // Defines how animation behaves on scroll events (play once on enter)
            once: true, // Ensures the animation only runs once
            // markers: process.env.NODE_ENV === "development", // Uncomment for debug markers in development
          }
        }
      );
      // Store the ScrollTrigger instance from the tween
      if (tween.scrollTrigger) {
        stInstances.push(tween.scrollTrigger);
      }
    });
    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      stInstances.forEach(st => {
        st.kill(); // Kill each stored ScrollTrigger instance
      });
    };
  }, []);

  // Function to add individual card elements to the cardsRef array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary-light/10"> {/* Using a light tint of primary color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-neutral-800">
            Transforming Businesses, One Pixel at a Time
          </h2>
        </motion.div>
        {/* Grid for portfolio items - responsive columns */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projectsData.map((project) => (
            <div key={project.id} ref={addToRefs} className="opacity-0"> {/* Initial opacity-0 for GSAP */}
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col h-full" // Ensure cards take full height for consistent alignment
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }} // Enhanced hover effect
                transition={{ type: "spring", stiffness: 260, damping: 20 }} // Spring animation for hover
              >
                <div className="relative h-64 w-full overflow-hidden md:h-72">
                  <img 
                    src={project.imageUrl} 
                    alt={`Showcase of ${project.title}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy" // Lazy load images for performance
                  />
                  {/* Overlay for text or additional hover effects if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col"> {/* Flex grow for content to push footer down */}
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary-dark group-hover:text-primary-DEFAULT transition-colors duration-300">{project.title}</h3>
                  <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">{project.category}</p>
                  <p className="text-neutral-600 leading-relaxed mb-auto">{project.description}</p> {/* mb-auto pushes links to bottom */}
                  <div className="mt-6 flex space-x-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent-DEFAULT hover:text-accent-dark font-medium transition-colors duration-300 text-sm"
                    >
                      View Live Site &rarr;
                    </a>
                    {/* <a href={project.caseStudyLink} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-500 font-medium transition-colors duration-300 text-sm">Case Study</a> */}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 