import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Modern Dentist Website",
    category: "Healthcare",
    imageUrl: "https://via.placeholder.com/600x400.png/A78BFA/FFFFFF?Text=DentistSite",
    description: "A clean, professional, and high-converting website for a local dental practice."
  },
  {
    id: 2,
    title: "Dynamic Gym Portal",
    category: "Fitness",
    imageUrl: "https://via.placeholder.com/600x400.png/FFCA28/000000?Text=GymPortal",
    description: "Engaging web experience for a fitness center, boosting memberships."
  },
  {
    id: 3,
    title: "Luxury Realtor Showcase",
    category: "Real Estate",
    imageUrl: "https://via.placeholder.com/600x400.png/66BB6A/FFFFFF?Text=RealtyCo",
    description: "Elegant property listings and lead generation for a high-end realtor."
  },
  {
    id: 4,
    title: "Car Dealer Inventory Site",
    category: "Automotive",
    imageUrl: "https://via.placeholder.com/600x400.png/42A5F5/FFFFFF?Text=CarDealer",
    description: "Streamlined inventory management and sales for a local car dealership."
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = []; // Reset on re-renders

  useEffect(() => {
    // GSAP Scroll Reveal for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // When the top of the card hits 85% of the viewport height
            toggleActions: "play none none none", // Play animation once
            once: true,
          }
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Our Recent Work
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={addToRefs}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
              whileHover={{ y: -8 }} // Framer Motion for simple hover lift
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.category}</p>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 