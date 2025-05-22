'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import ScrollAnimation from './ScrollAnimation';

// More realistic project data
const projectsData = [
  {
    id: 1,
    title: "Healthcare / Dentistry Website Template",
    category: "Healthcare / Dentistry",
    // Using Unsplash for more realistic placeholders - replace with actual project images
    imageUrl: "/images/Dentist-porfilio-pic.jpg",
    description: "A sleek, patient-focused website for a modern dental clinic, featuring online appointment booking and clear service showcases. Resulted in a 40% increase in new patient inquiries.",
    liveLink: "/dental-clinic",
    caseStudyLink: "#" // Placeholder for case study
  },
  {
    id: 2,
    title: "Fitness & Wellness Website Template",
    category: "Fitness & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "Dynamic web portal for a boutique gym, integrating class schedules, membership management, and trainer profiles. Boosted member engagement by 60%.",
    liveLink: "/fitness-studio",
    caseStudyLink: "#"
  },
  {
    id: 3,
    title: "Real Estate Website Template",
    category: "Real Estate",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "Luxurious online presence for a high-end realtor, showcasing properties with immersive galleries and virtual tours. Led to a 25% faster sales cycle.",
    liveLink: "/real-estate",
    caseStudyLink: "#"
  },
  {
    id: 4,
    title: "Dealership Website Template",
    category: "Automotive Dealership",
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format",
    description: "A comprehensive vehicle inventory and sales platform for a local car dealership, featuring advanced search filters and financing calculators. Increased online leads by 35%.",
    liveLink: "/auto-dealership",
    caseStudyLink: "#"
  },
];

console.log("projectsData", projectsData);

const Portfolio = () => {
  const router = useRouter();
  const projectsRef = useRef([]);

  const handleProjectClick = (link) => {
    router.push(link);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-mediumBlue-dark to-secondary-dark text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
            Our Recent Work
          </h2>
        </motion.div>

        {projectsData.length === 0 ? (
          <div className="text-white text-center">No projects found.</div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-2 gap-10 w-full h-full min-h-[70vh] max-w-6xl mx-auto items-center justify-center">
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                ref={el => projectsRef.current[index] = el}
                className="card group cursor-pointer z-10 flex flex-col h-full min-h-[380px] max-h-[500px] p-8 items-center text-center"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => { e.target.src = '/placeholder.png'; }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-2">
                  <span
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                  >
                    {project.category}
                  </span>
                </div>
                <div className="w-full flex items-center justify-center">
                  <button
                    onClick={() => handleProjectClick(project.liveLink)}
                    className="inline-flex items-center gap-1 text-white underline underline-offset-4 hover:text-primary transition-colors text-base font-medium bg-transparent border-none shadow-none p-0 cursor-pointer"
                    style={{ boxShadow: 'none' }}
                  >
                    View Template
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 