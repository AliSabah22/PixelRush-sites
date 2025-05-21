'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import ScrollAnimation from './ScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

// More realistic project data
const projectsData = [
  {
    id: 1,
    title: "Healthcare / Dentistry Website Template",
    category: "Healthcare / Dentistry",
    // Using Unsplash for more realistic placeholders - replace with actual project images
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400&fit=crop&auto=format", 
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

// Portfolio Section Component
const Portfolio = () => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const projects = projectsRef.current;
    
    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleProjectClick = (link) => {
    router.push(link);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-br from-primary-dark via-mediumBlue-dark to-secondary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              ref={el => projectsRef.current[index] = el}
              className="card group cursor-pointer"
              whileHover={{ y: -10 }}
              onClick={() => handleProjectClick(project.liveLink)}
            >
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                >
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProjectClick('/portfolio')}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 